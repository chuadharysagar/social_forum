from app import create_app

# Create the Flask app
app = create_app()

if __name__ == "__main__":
    # Run the app on localhost and port 5000
    app.run(host="127.0.0.1", port=5000, debug=True)
