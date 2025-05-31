const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = emailInput.value.trim();

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    message.style.padding = '10px';
    message.style.backgroundColor = 'rgba(0,0,0,0.5)';
    message.textContent = 'Please enter your email.';
  } else if (!emailPattern.test(email)) {
    message.style.padding = '10px';
    message.style.backgroundColor = 'rgba(0,0,0,0.5)';
    message.textContent = 'Please enter a valid email address.';
  } else {
    message.style.padding = '10px';
    message.style.color = 'rgb(0,209,0)';
    message.style.backgroundColor = 'rgba(0,0,0,0.5)';
    message.textContent = 'Thanks for subscribing!';
  
  }
});