document.getElementById('toggle-password').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const type = passwordField.getAttribute('type');
  passwordField.setAttribute('type', type === 'password' ? 'text' : 'password');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Placeholder logic for now
  if (email === 'admin@example.com' && password === '123456') {
    window.location.href = 'index.html'; // redirect to main app
  } else {
    document.getElementById('login-message').textContent = "Invalid credentials";
    document.getElementById('login-message').style.color = "red";
  }
});
