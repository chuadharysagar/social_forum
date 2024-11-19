from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

app = Flask(__name__)

# Enabling CORS for frontend at http://localhost:5173
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# MongoDB URI and secret key configuration
app.config['MONGO_URI'] = 'mongodb://localhost:27017/snapgram'
app.config['SECRET_KEY'] = '123honors'  # Secret key for JWT encoding
mongo = PyMongo(app)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data['name']
    email = data['email']
    password = data['password']

    # Check if user already exists
    if mongo.db.users.find_one({'email': email}):
        return jsonify({'error': 'Email already exists'}), 400

    # Hash the password before storing
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

    # Insert the new user into MongoDB
    mongo.db.users.insert_one({
        'name': name,
        'email': email,
        'password': hashed_password
    })

    return jsonify({'message': 'Signup successful!'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    # Find the user from the database by email
    user = mongo.db.users.find_one({'email': email})

    # Check if user exists and password matches
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid email or password'}), 401

    # Generate JWT token (valid for 1 hour)
    token = jwt.encode({
        'email': email,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }, app.config['SECRET_KEY'], algorithm='HS256')

    return jsonify({'token': token}), 200

if __name__ == '__main__':
    app.run(debug=True)
