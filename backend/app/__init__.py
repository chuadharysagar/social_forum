from flask import Flask
from app.auth import auth_bp
from .utils.db import connect_db, test_db_connection

def create_app():
    app = Flask(__name__)

    app.config.from_object("app.config.Config")

    connect_db(app)
    test_db_connection()

    app.register_blueprint(auth_bp)

    return app
