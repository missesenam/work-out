const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('.menu-links')
  const navBtnDOM = getElement('.menu_btn')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })

// date ajustment
  const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

// scroll

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topOnScroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// cookies

const cookiesBox = document.querySelector('.cookies-box');
const buttons = document.querySelectorAll('.cookies__btn');

// showw //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // button //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // time //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener('load', executeCodes);

// view counts

function liveViews(response) {
  document.getElementById('visiters').innerText = response.value;
}