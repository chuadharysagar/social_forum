from werkzeug.security import generate_password_hash, check_password_hash
from app.utils.db import mongo

class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    @staticmethod
    def validate_input(data):
        if not all([data.get("name"), data.get("email"), data.get("password")]):
            return False, "All fields are required"
        
        if '@' not in data['email']:
            return False, "Invalid email format"
        
        return True, None

    # Hash the password 
    @staticmethod
    def hash_password(password):
        return generate_password_hash(password)

    @staticmethod
    def save_user(data):
        user = User(
            name=data['name'],
            email=data['email'],
            password=User.hash_password(data['password'])
        )
        # Insert user into MongoDB collection
        mongo.db.users.insert_one({
            "name": user.name,
            "email": user.email,
            "password": user.password
        })


    @staticmethod
    def find_user_by_email(email):
        return mongo.db.users.find_one({"email": email})

    @staticmethod
    def check_password(stored_password, provided_password):
        return check_password_hash(stored_password, provided_password)