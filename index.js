// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXJFExOlq9D6U_wdSrTEnoNgYfLM9fhr0",
  authDomain: "csi4160-6fcfe.firebaseapp.com",
  databaseURL: "https://csi4160-6fcfe-default-rtdb.firebaseio.com",
  projectId: "csi4160-6fcfe",
  storageBucket: "csi4160-6fcfe.appspot.com",
  messagingSenderId: "448646025675",
  appId: "1:448646025675:web:3847e843955d681ca5a64e",
  measurementId: "G-KQPGLGGM8D",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const database = firebase.database();

function createAccount() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;

  // validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is invalid");
    return;
  }
  if (
    validate_firstName(firstName) == false ||
    validate_lastName(lastName) == false
  ) {
    alert("First name or last name invalid");
    return;
  }

  // Move on with auth
  auth
    .createUserWithEmailandPassword(email, password)
    .then(function () {
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };

      database_ref.child("users/" + user.uid).set(user_data);
    })
    .catch(function (error) {
      var error_code = error_code;
      var error_message = error_message;
      alert(error_message);
    });
}

function login() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  // validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is invalid");
  }

  auth
    .signInWithEmailandPassword(email, password)
    .then(function () {
      var user = auth.currentUser;
      alert("User created");

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);
    })
    .catch(function (error) {
      var error_code = error_code;
      var error_message = error_message;
      alert(error_message);
    });
}
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }

  function validate_password(password) {
    if (password < 6) {
      return false;
    } else {
      return true;
    }
  }

  function validate_firstName(firstName) {
    if (firstName <= 0) {
      return false;
    } else {
      return true;
    }
  }

  function validate_lastName(lastName) {
    if (lastName <= 0) {
      return false;
    } else {
      return true;
    }
  }
}
