const mainData = () => {

    let renderAnimeList = (array, ganres) => {
        console.log(array);
        console.log(ganres);
    };

    let renderTopAnime = (array) => {
        let wrapper = document.querySelector('.filter__gallery');
        // console.log(array)
        wrapper.innerHTML = '';
        array.forEach(el => {
            // console.log(element);
            wrapper.insertAdjacentHTML('afterbegin', `
                <div class="product__sidebar__view__item set-bg mix" data-setbg="${el.image}">
                    <div class="ep">${el.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${el.views}</div>
                    <h5><a href="/anime-details.html">${el.title}</a></h5>
                </div>
                `)
        });
        // console.log(wrapper);
        wrapper.querySelectorAll('.set-bg').forEach((elem) => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
        });
    }


    fetch('https://anime-718a5-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        // fetch('./db-2.json')
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            let ganres = new Set();

            renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

            data.forEach((item) => {
                ganres.add(item.ganre);
            })
            // console.log(ganres);
            renderAnimeList(data, ganres);
        });
}
mainData();