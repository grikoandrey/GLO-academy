const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');

const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
    {
        id: 0,
        title: 'Пвх материал 1й сорт',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 1,
        title: 'Пвх материал 2й сорт',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 2,
        title: 'Пвх материал 3й сорт',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 3,
        title: 'Пвх материал 4й сорт',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 4,
        title: 'Пвх материал 5й сорт',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 5,
        title: 'Пвх материал 6й сорт',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 6,
        title: 'Пвх материал 7й сорт',
        price: '176 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
];

const render = (cardList) => {
    cardWrapper.innerHTML = '';

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content-main__list-item--title">
                    ${item.title}
                </h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span content-main__list-item--desc>${item.address}</span>
                    <span content-main__list-item--desc>${item.date}</span>
                </div>
            </a>
        `);
    });
};

const filteredArray = (array, filter) => {
    return array.filter((item) => {
        return item.title.includes(filter) || item.price.includes(filter);
    })
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));
});