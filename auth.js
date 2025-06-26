const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');

let isPasswordVisible = false;

togglePassword.addEventListener('click', () => {
  isPasswordVisible = !isPasswordVisible;
  passwordInput.type = isPasswordVisible ? 'text' : 'password';

  // Change SVG path based on state
  eyeIcon.innerHTML = isPasswordVisible
    ? `<path d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 
         11-7 11-7-3.367-7-11-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 
         5-5 5 2.243 5 5-2.243 5-5 5zm8.284-10.284l-1.414 
         1.414c1.585 1.274 2.81 2.885 3.13 3.87-0.407 
         1.164-2.796 4.167-7 4.167-1.663 0-3.123-0.511-4.34-1.341l-1.414 
         1.414c1.589 1.059 3.503 1.727 5.754 1.727 5.633 
         0 9.572-4.918 10-6-.442-1.263-1.823-3.128-3.716-4.251z"/>`
    : `<path d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 
         11-7 11-7-3.367-7-11-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 
         5-5 5 2.243 5 5-2.243 5-5 5zm0-8.5c-1.931 0-3.5 
         1.569-3.5 3.5s1.569 3.5 3.5 3.5 3.5-1.569 
         3.5-3.5-1.569-3.5-3.5-3.5z"/>`;
});
