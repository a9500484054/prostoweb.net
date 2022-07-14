document.addEventListener('DOMContentLoaded', () => {


    const popupUser = document.querySelector('.popup-user');
    const popupCode = document.querySelector('.popup-code');
    const popupUserForm = document.querySelector('.popup__user-form');
    const popupCodeForm = document.querySelector('.popup__code-form');



    popupUserForm.addEventListener('submit', () => {
        popupUser.style.display = "none"
        popupCode.style.display = "block"
    });

});
