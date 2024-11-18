from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta
from app.auth.models import User
from app.utils.config import SECRET_KEY  # Secret key for JWT encoding
from app.utils.db import mongo

auth_bp = Blueprint('auth', __name__)

def generate_jwt_token(user):
    payload = {
        "sub": str(user["_id"]),  # User's unique ID
        "email": user["email"],   # Optional: Include email or other user details
        "exp": datetime.utcnow() + timedelta(days=1),  # Set expiration time (1 day)
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token

@auth_bp.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    is_valid, message = User.validate_input(data)
    if not is_valid:
        return jsonify({"message": message}), 400

    # Check if user already exists
    existing_user = User.find_user_by_email(data['email'])
    if existing_user:
        return jsonify({"message": "User already exists"}), 409

    # Hash the password before saving
    hashed_password = generate_password_hash(data['password'])

    # Save the new user to the database
    User.save_user({
        **data,
        'password': hashed_password  # Store hashed password
    })
    return jsonify({"message": "User registered successfully"}), 201

@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = User.find_user_by_email(email)
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"message": "Invalid email or password"}), 401

    # Generate JWT Token
    token = generate_jwt_token(user)
    
    return jsonify({"message": "Login successful", "token": token}), 200
