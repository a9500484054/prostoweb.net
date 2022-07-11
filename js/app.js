document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu')


    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('menu-btn--active')
        menu.classList.toggle('menu--active')
    })


    const whom = document.querySelector('.whom');
    const blockTwoBtn = document.querySelectorAll('.block-two__btn');
    const blockThree = document.querySelectorAll('.block-three');

    if (whom) {
        whom.addEventListener('click', (e) => {
            if (e.target.classList.contains('block-two__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                blockTwoBtn.forEach(el => {el.classList.remove('block-two__btn--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('block-two__btn--active');
                umInvestorLpFeaturesHandler(tabsPath);
            }
        });
    }
    
    const umInvestorLpFeaturesHandler = (path) => {
        blockThree.forEach(el => {el.classList.remove('block-three--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('block-three--active');
    };

    const blockThreeButton = document.querySelectorAll('.block-three__button');

    blockThreeButton.forEach(el => {
        el.addEventListener('click', () => {
            blockThree.forEach(el => {el.classList.remove('block-three--active')});
        })
    })


    const startWrapper = document.querySelector('.start__wrapper');
    const listElemItem = document.querySelectorAll('.list-elem__item');
    const listTextItem = document.querySelectorAll('.list-text__item');

    if (startWrapper) {
        startWrapper.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('list-elem__item')) {
                const tabsPath = e.target.dataset.tabsPath;
                listElemItem.forEach(el => {el.classList.remove('list-elem__item--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('list-elem__item--active');
                umInvestorFeaturesHandler(tabsPath);
            }
        });
    }
    
    const umInvestorFeaturesHandler = (path) => {
        listTextItem.forEach(el => {el.classList.remove('list-text__item--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('list-text__item--active');
    };

    const enter = document.querySelectorAll('.enter');
    const popup = document.querySelector('.popup-user');

    enter.forEach((el) => {
        el.addEventListener('click', (e) => {
            popup.classList.add('popup-user--active')
        });
    });
});

