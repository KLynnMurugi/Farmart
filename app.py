from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://farmart_user:password@localhost/farmart_db'
db = SQLAlchemy(app)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to Farmart Backend!"})

if __name__ == "__main__":
    app.run(debug=True)
