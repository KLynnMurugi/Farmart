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

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:SDF-PT07-GROUP-7/Farmart.git
   cd farmart
