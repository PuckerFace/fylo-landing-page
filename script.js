let lightMode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');
const toggleElements = document.querySelectorAll('.switch');
const darkElements = document.querySelectorAll('.dark');
const signUp = document.getElementById('signup');

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightmode', 'active');

  // Update the hidden class
  toggleElements.forEach((element) => {
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
  darkElements.forEach((element) => {
    if (element.classList.contains('dark')) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });
};

const disableLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightmode', null);

  // Update the hidden class
  toggleElements.forEach((element) => {
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
  darkElements.forEach((element) => {
    if (element.classList.contains('dark')) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
};

// Initialize the theme on page load
if (lightMode === 'active') enableLightMode();

themeSwitch.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightmode');
  lightMode !== 'active' ? enableLightMode() : disableLightMode();
});

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

signUp.addEventListener('click', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  if (validateEmail(emailInput.value)) {
    errorMessage.textContent = '';
    emailInput.style.border = '2px solid hsl(170, 45%, 43%)';
  } else {
    errorMessage.textContent = 'Valid email required';
    errorMessage.style.color = 'hsl(4, 100%, 67%)';
    emailInput.style.border = '2px solid hsl(4, 100%, 67%)';
  }
});
