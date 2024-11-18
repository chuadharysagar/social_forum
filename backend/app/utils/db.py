from flask_pymongo import PyMongo

mongo = PyMongo()

def connect_db(app):
    app.config["MONGO_URI"] = app.config["MONGO_URI"]
    mongo.init_app(app)

def test_db_connection():
    try:
        # Try listing the databases to check the connection
        mongo.cx.list_database_names()
        print("DB connected")
    except Exception as e:
        print(f"DB connection failed: {e}")
