let openEditProfileButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let profileNameForm = popup.querySelector('#user-name');
let profileJobForm = popup.querySelector('#user-job');
let popupForm = popup.querySelector('.form');

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



