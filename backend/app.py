from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Configuring PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://farmart_user:password@localhost/farmart_db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Models for Animals and Users (Farmers and Customers)
class Animal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    is_farmer = db.Column(db.Boolean, default=False)

# Routes
@app.route('/')
def index():
    return jsonify(message="Welcome to Farmart API!")

@app.route('/animals', methods=['GET'])
def get_animals():
    animals = Animal.query.all()
    return jsonify([animal.as_dict() for animal in animals])

@app.route('/animal', methods=['POST'])
def add_animal():
    data = request.get_json()
    new_animal = Animal(name=data['name'], breed=data['breed'], age=data['age'], price=data['price'])
    db.session.add(new_animal)
    db.session.commit()
    return jsonify(message="Animal added successfully"), 201

if __name__ == '__main__':
    app.run(debug=True)
