import { openPopup, closePopup } from './index.js';

const popupFigure = document.querySelector('.popup_type_image');
const popupFigureImage = popupFigure.querySelector('.figure__image');
const popupFigureCaption = popupFigure.querySelector('.figure__caption');
const closeImgButton = document.querySelector('#closeImg');

class Card {
    constructor(cardSelector, name, link) {
        this._cardSelector = cardSelector;
        this._name = name;
        this._link = link
    }
}    