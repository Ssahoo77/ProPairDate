// Your web app's Firebase configuration
const firebaseConfig = {
    databaseURL: "https://datingweb-cc1a4-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyBuEMJ0nO0mAmuKBCtxOLNM7H-_KwWLJjg",
    authDomain: "fir-e8d28.firebaseapp.com",
    projectId: "fir-e8d28",
    storageBucket: "fir-e8d28.appspot.com",
    messagingSenderId: "556919834771",
    appId: "1:556919834771:web:3db7e8b06f5fc5760ce566",
    measurementId: "G-KB6XL412SP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to the login form
const loginForm = document.getElementById('loginForm');

// Form submission handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create a unique ID based on username (you can also use email or other unique identifier)
    const userId = username.replace(/\s+/g, '_').toLowerCase();

    // Save the data to Firebase
    firebase.database().ref('users/' + userId).set({
        email: email,
        username: username,
        password: password
    }).then(() => {
        alert('Login data saved successfully!');
        loginForm.reset();
    }).catch((error) => {
        alert('Error saving data: ' + error.message);
    });
});
