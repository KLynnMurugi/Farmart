# Farmart - E-commerce for Farmers

## Project Overview

Farmart is an e-commerce platform designed to connect farmers directly with consumers, eliminating middlemen and helping farmers sell farm animals directly to buyers. The platform allows users to browse, search, and filter animals for sale, while farmers can list, update, and manage their animals for sale.

## Technologies Used

- **Backend:**
  - **Python Flask**: A lightweight web framework for building RESTful APIs.
  - **PostgreSQL**: Relational database for storing user data, animals, orders, and more.

- **Frontend:**
  - **React.js**: JavaScript library for building user interfaces.
  - **Redux Toolkit**: For state management in the React app.
  - **Axios**: For making API requests to the backend.

- **Testing:**
  - **Jest**: Testing framework for frontend components and actions.
  - **Pytest**: Testing framework for backend endpoints and functionality.

## User Stories

### Farmer:
- Auth (Login/Register)
- Add a new animal for sale
- Update and edit animals for sale
- Confirm/Reject orders

### User:
- Auth (Login/Register)
- View all listed animals
- Search for animals by type and breed
- Filter animals by breed and age
- Add animals to the cart
- Check out and pay for items in the cart

## Features

- **Authentication**: User and farmer login and registration functionality.
- **Animal Listings**: Farmers can list farm animals with details like breed, age, and price.
- **Search & Filters**: Users can search for animals by type and breed, and filter them by age and breed.
- **Cart & Checkout**: Users can add animals to their cart and proceed to checkout.
- **Order Management**: Farmers can confirm or reject orders for animals.

## Project Setup
Getting StartedFollow these steps to get the Farmart marketplace running on your local machine.
Prerequisites
Python 3.xNode.js & npmGit
## Step 1: Backend Setup (Flask)
Open a terminal (Linux) or Command Prompt (Windows) in the root project folder.
### Linux (Ubuntu/Debian)Bash
# 1. Create a virtual environment
python3 -m venv venv

# 2. Activate the environment
source venv/bin/activate

# 3. Install dependencies
pip install flask flask-sqlalchemy flask-cors flask-migrate axios

# 4. Seed the database (Run once to populate animals)
python3 seed.py

# 5. Run the server
python3 app.py

### WindowsBash
# 1. Create a virtual environment
python -m venv venv

# 2. Activate the environment
.\venv\Scripts\activate

# 3. Install dependencies
pip install flask flask-sqlalchemy flask-cors flask-migrate axios

# 4. Seed the database (Run once to populate animals)
python seed.py

# 5. Run the server
python app.py

## Step 2: Frontend Setup (React)Open a new terminal window and navigate to your frontend directory.
Both Windows & LinuxBash
# 1. Navigate to frontend folder
cd frontend

# 2. Install Node packages
npm install

# 3. Start the React development server
npm start

The app will be available at http://localhost:3000.

## Step 2: Backend Setup (React)Open a new terminal window and navigate to your backend directory.
LinuxBash
# 1. Navigate to backend folder
cd backend

# 2. Run seed.py
python3 seed.py

