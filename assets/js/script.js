/* Mobile menu */
const menuBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.menu-item');
const moreBtn = document.querySelector('.more-btn');
const speakerList = document.querySelector('#speakerList');
const mediaQueryData = window.matchMedia('(max-width: 768px)');

/* Fetch Data */
const displayTwo = (ob) => {
  let templateSpeaker = '';
  for (let i = 0; i < 2; i += 1) {
    templateSpeaker += `<div class="speaker">
    <img src="./assets/images/speakers/${ob[i].profileImg}" alt="profile image" class="img-profile">
    <div class="speaker-info">
      <h3 class="speaker-name">${ob[i].name}</h3>
      <p class="role">${ob[i].role}</p>
      <p class="bio">${ob[i].bio}</p>
    </div>
    </div>`;
  }
  speakerList.innerHTML = templateSpeaker;
};

const displayAll = (speakerObj) => {
  let templateSpeaker = '';
  for (let i = 0; i < speakerObj.length; i += 1) {
    templateSpeaker += `<div class="speaker">
    <img src="./assets/images/speakers/${speakerObj[i].profileImg}" alt="profile image" class="img-profile">
    <div class="speaker-info">
      <h3 class="speaker-name">${speakerObj[i].name}</h3>
      <p class="role">${speakerObj[i].role}</p>
      <p class="bio">${speakerObj[i].bio}</p>
    </div>
    </div>`;
  }
  speakerList.innerHTML = templateSpeaker;
};

const mediaTest = (e, dataOb) => {
  if (e.matches) {
    displayTwo(dataOb);
  } else {
    displayAll(dataOb);
  }
};

const speakerData = fetch('./assets/data/speakers.json').then((result) => result.json());
speakerData.then((obj) => {
  moreBtn.addEventListener('click', () => {
    const re = /More/;
    const flag = re.test(moreBtn.textContent);

    if (flag) {
      moreBtn.innerHTML = 'Less ⬆️';
      displayAll(obj);
    } else {
      moreBtn.innerHTML = 'More ⬇️';
      displayTwo(obj);
    }
  });

  /* Media Query */
  mediaTest(mediaQueryData, obj);
});

mediaQueryData.addListener(mediaTest);

function swapIcon() {
  if (mobileMenu.classList.contains('hide-menu')) {
    menuBtn.src = './assets/images/mobile_menu.png';
  } else {
    menuBtn.src = './assets/images/close_mobile_menu.png';
    menuBtn.style = 'background: black';
  }
}

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide-menu');
  mobileMenu.style.transition = 'all 3s';
  swapIcon();
});

menuItems.forEach((menuList) => {
  menuList.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide-menu');
    swapIcon();
  });
});
