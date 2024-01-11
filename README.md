# NOTES APP

Single page application (SPA) built with Spring and React, enabling CRUD operations for notes on the web.

Persistence is achieved using a MySQL relational database.

The backend exposes a REST API that creates, reads, deletes and updates notes in a MySQL db, while the frontend performs request to those endpoints updating its React components.

The app also lets you organize notes in "active" and "archived" notes.

![Captura de pantalla (25)](https://github.com/ensolvers-github-challenges/Perez-a126cb/assets/85687161/e7a0232a-09d6-48e7-b9e1-a3599435a2aa)




## Requirements

- **Node.js:** v14.17.6 or higher
- **npm:** 6.14.14 or higher
- **Java:** 11 or higher
- **Maven:** 3.6.3 or higher

## Installation

1. Clone this repository: git clone https://github.com/ensolvers-github-challenges/Perez-a126cb.git
2. Navigate to the frontend folder: cd frontend
3. Install frontend dependencies: npm install bootstrap reactstrap
4. Go back to the main folder: cd ..
5. Navigate to the backend folder: cd backend
6. Install backend dependencies: mvn clean install
   
## Database

1. Open MySQL Workbench, create a new connection, and execute the following command: CREATE SCHEMA db_notes;
2. In backend/src/main/resources/application.properties, change the variables DATABASE.NAME, YOUR.USERNAME, and YOUR.PASSWORD with the database name (db_notes), your username, and your password.
   
## Execution
To run the application, follow these steps:

1. Open a terminal in the project's root.
2. Run the batch script (on Windows): run_app.bat
3. Or run manually:
      - In the frontend folder: npm start
      - In the backend folder: mvn spring-boot:run
   
The application will be available at http://localhost:3000.
