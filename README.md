# Equipment Tracker Application

This is a simple full-stack web application to manage equipment details.
Users can add, view, edit, and delete equipment records.

# 🛠 Tech Stack

**Frontend**
- React (Create React App)
- HTML, CSS, JavaScript

**Backend**
- Node.js
- Express.js

**Database**
- JSON file (equipment.json)

# ✨ Features

- View equipment list in table format
- Add new equipment
- Edit existing equipment
- Delete equipment
- REST API integration
- Basic form validation

# 📁 Project Structure

equipment-tracker  
├── backend  
│   ├── server.js  
│   ├── equipment.json  
│   ├── package.json  
│  
├── frontend  
│   ├── src  
│   │   ├── components  
│   │   │   ├── EquipmentForm.js  
│   │   │   ├── EquipmentTable.js  
│   │   ├── App.js  
│   │   ├── index.js  
│   ├── package.json  


## ▶️ How to Run the Project Locally

### 1️⃣ Run Backend

cd backend
npm install
node server.js
Backend will run on: http://localhost:5000

### 2️⃣ Run Frontend
cd frontend
npm install
npm start
Frontend will run on: http://localhost:3000


### 📌 Assumptions

Used JSON file instead of a database for simplicity

No authentication required

Single-user usage

### 🚀 Future Improvements

Add search and filter functionality

Add sorting

Connect to a real database (MongoDB)

Improve UI styling

Add pagination

### 👤 Author

Developed by Ankita Shrivastav
