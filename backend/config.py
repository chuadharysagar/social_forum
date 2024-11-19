import os

class Config:
    MONGO_URI = "mongodb://localhost:27017/snapgram"  # Update with your MongoDB URI
    SECRET_KEY = os.getenv("SECRET_KEY", "123Honors")
