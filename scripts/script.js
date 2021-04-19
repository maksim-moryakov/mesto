const openEditProfileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileNameForm = popup.querySelector('#popup__name');
const profileJobForm = popup.querySelector('#popup__job');
const popupForm = popup.querySelector('.form');

// добавления/удаления класса у popup
function togglePopup (evt) {
   evt.preventDefault();
   popup.classList.toggle('popup_opened');
}

// сохранения данных из popup
function savePopupValue (evt) {
   profileName.textContent = profileNameForm.value;
   profileJob.textContent = profileJobForm.value;
   togglePopup(evt);
}

// открытия popup при нажатии на кнопку редактирование профиля пользователя
function editProfile (evt) {
   togglePopup(evt);
   profileNameForm.value = profileName.textContent;
   profileJobForm.value = profileJob.textContent;
}

// обработчик события на крестик, закрытия popup
closePopupButton.addEventListener('click', togglePopup);

// обработчик события при нажатии кнопки Сохранить
popupForm.addEventListener('submit', savePopupValue);

// обработчик события на кнопку редактирования профиля пользователя
openEditProfileButton.addEventListener('click', editProfile);



