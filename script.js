// Toggle login views
const container = document.querySelector('.container');
const viewBtn = document.querySelector('.view-btn');
const evaluateBtn = document.querySelector('.evaluate-btn');

viewBtn.addEventListener('click', () => {
  container.classList.add('active');
});

evaluateBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNTbXC5uXNTWJlbOvmJ8B0k1dx-hv3pPc",
  authDomain: "smartshelf-3c91d.firebaseapp.com",
  databaseURL: "https://smartshelf-3c91d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartshelf-3c91d",
  storageBucket: "smartshelf-3c91d.firebasestorage.app",
  messagingSenderId: "974289829133",
  appId: "1:974289829133:web:2d961fe28112c6b1c38444",
  measurementId: "G-09KKY8S3N1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login (shared for both forms)
document.querySelectorAll('.form-box form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.querySelector('input[type="text"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();

    // Simple validation
    if (!username || !password) {
      alert('Please fill in both fields');
      return;
    }

    // Log the role based on which form was used
    const role = form.closest('.form-box').classList.contains('view') ? 'viewer' : 'evaluator';
    localStorage.setItem('userRole', role);

    // Firebase login
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        alert(`Login successful as ${role}`);
        // Redirect to dashboard or next step
        window.location.href = 'dashboard.html'; // customize this
      })
      .catch((error) => {
        alert('Login failed: ' + error.message);
      });
  });
});
