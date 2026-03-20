from app import app, db, Animal

with app.app_context():
    # Clear existing data to start fresh
    db.session.query(Animal).delete()
    
    # Add sample animals
    a1 = Animal(name="Bessie", breed="Friesian Cow", age=3, price=45000.0)
    a2 = Animal(name="Snowball", breed="Merino Sheep", age=1, price=12000.0)
    a3 = Animal(name="Goldie", breed="Boer Goat", age=2, price=15000.0)
    
    db.session.add_all([a1, a2, a3])
    db.session.commit()
    print("Database seeded with sample animals!")