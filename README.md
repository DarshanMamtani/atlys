# Feed with Authentication

A react project for dummy feed with authentication, which has two pages,
1. Home: contains feed ("/")
2. Auth: contains authentication ("/auth")

------------

#### Authentication
Authentication is handled on client side through **LocalStorage** of browser
- **users**: key stores array of users who have regirstered/signed up on app
  *(if users key is not present, there are no registered users)*
- **userState**: key stores currently logged in user on app
  *(if userState  key is not present, no user is logged in on app)*

**Note**: In order to log in, the user must be registered or signed up on the app.

------------

#### Component Structure
1.  **common**
- **AuthCard** renders login/signup form and handles authentication
- **PostCard** renders ui of post
- **Modal** renders modal

2.  **pages**
- **Home** component renders main feed
- **Auth** component renders authentication components

3. **hocs**
- **withAuth** HOC checks wheter user is logged in or not

4. **popups**
- **AuthPopup** handles auth using Modal

5. **icons** contains svg icon for Logo

------------

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
