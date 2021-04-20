let openEditProfileButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let profileNameForm = popup.querySelector('#user-name');
let profileJobForm = popup.querySelector('#user-job');
let popupForm = popup.querySelector('.form');

// добавления класса у popup и получение данных профиля пользователя
function openPopup (evt) {
   popup.classList.add('popup_opened');
   profileNameForm.value = profileName.textContent;
   profileJobForm.value = profileJob.textContent;
}

// удаление класса у popup
function closePopup (evt) {
   popup.classList.remove('popup_opened');
}

// сохранения измененных данных из popup
function savePopupValue (evt) {
   evt.preventDefault();
   profileName.textContent = profileNameForm.value;
   profileJob.textContent = profileJobForm.value;
   closePopup(evt);
}

// обработчик события на крестик, закрытия popup
closePopupButton.addEventListener('click', closePopup);

// обработчик события при нажатии кнопки Сохранить
popupForm.addEventListener('submit', savePopupValue);

// обработчик события на кнопку редактирования профиля пользователя
openEditProfileButton.addEventListener('click', openPopup);



