1. `Prerequisites`

- Node.js v12 - https://nodejs.org/en/download/
- MongoDB Community Server - https://www.mongodb.com/try/download/community

2. `Install project`

Create a directory P13.
Inside, clone the two following folders:
- Backend: git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git
- Frontend: git clone https://github.com/Real-Selim-Shady/Project-13-Frontend.git

3. `Install dependencies`

- In backend folder, install npm dependencies: cmd "npm install"
- In frontend folder, install npm dependencies: cmd "npm install"
- In frontend folder, install react-redux dependencies: cmd "npm install react-redux"
- In frontend folder, install immer dependencies: cmd "npm install immer"

4. `Launch project`

- In frontend folder, launch cmd "npm start"
    - Your Frontend project should now be running at http://locahost:3000/
- In backend folder, launch cmd "npm run dev:server"
- In backend folder, launch cmd "npm run populate-db"
    - Your Backend server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database

5. `Populated Database Data`

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`


6. `API Documentation`

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

7. `Available Queries`

- Visit welcome page on http://locahost:3000/
- Log in on http://locahost:3000/user/login
- Visit one of the user profile while connected, using  http://locahost:3000/user/profile
- Sign up on http://locahost:3000/user/signup and create a new user
- Get redirected to http://locahost:3000/SuccessSignup/login when you successfully signed up and connect to your new profile
- Get redirected to http://locahost:3000/user/login if you try to access the profile page http://locahost:3000/user/profile without being connected
- Get redirected to a relevant error page according to your error between:
    -http://locahost:3000/error/connection
    -http://locahost:3000/error/connectUserUnknown
    -http://locahost:3000/error/connectWrongPassword
    -http://locahost:3000/error/signup
    -http://locahost:3000/error/signupMailExist
    -http://locahost:3000/*
