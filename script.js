let lightMode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');
const themeSwitchMobile = document.getElementById('theme-switch-mobile');
const toggleElements = document.querySelectorAll('.switch');
const darkElements = document.querySelectorAll('.dark');
const signUp = document.getElementById('signup');
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.icon');
const close = document.querySelector('.close');
const mode = document.querySelector('.mode');
const showSideBar = document.getElementById('show-side-bar');
const closeSideBar = document.getElementById('close-side-bar');

const setIcons = (isLightMode) => {
  if (isLightMode) {
    menu.src = 'images/menu_24dp_634FA2_FILL0_wght400_GRAD0_opsz24.svg';
    close.src = 'images/close_24dp_634FA2_FILL0_wght400_GRAD0_opsz24.svg';
  } else {
    menu.src = 'images/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
    close.src = 'images/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
  }
};

const toggleVisibility = (elements, shouldHide) => {
  elements.forEach((element) => {
    if (shouldHide) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });
};

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightmode', 'active');

  toggleVisibility(toggleElements, false);
  toggleVisibility(darkElements, true);

  setIcons(true);
};

const disableLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightmode', null);

  toggleVisibility(toggleElements, true);
  toggleVisibility(darkElements, false);

  setIcons(false);
};

if (lightMode === 'active') {
  enableLightMode();
} else {
  disableLightMode();
}

themeSwitch.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightmode');
  lightMode !== 'active' ? enableLightMode() : disableLightMode();
});

themeSwitchMobile.addEventListener('click', () => {
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
    errorMessage.style.color = 'hsl(0, 100%, 63%)';
    emailInput.style.border = '2px solid hsl(0, 100%, 63%)';
  }
});

showSideBar.addEventListener('click', () => {
  sideBar.style.display = 'flex';
});
closeSideBar.addEventListener('click', () => {
  sideBar.style.display = 'none';
});
