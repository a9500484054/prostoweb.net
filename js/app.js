document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu')


    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('menu-btn--active')
        menu.classList.toggle('menu--active')
    })


    const whom = document.querySelector('.whom');
    const blockTwoBtn = document.querySelectorAll('.block-two__btn');
    const blockTwo = document.querySelector('.block-two');
    const blockThree = document.querySelectorAll('.block-three');

    if (whom) {
        whom.addEventListener('click', (e) => {
            if (e.target.classList.contains('block-two__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                blockTwoBtn.forEach(el => {el.classList.remove('block-two__btn--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('block-two__btn--active');
                umInvestorLpFeaturesHandler(tabsPath);
            }
            blockTwo.classList.add('block-two--active')
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
});