const detailData = () => {
    let preloader = document.querySelector('.preloder');

    let renderGanreList = (ganres) => {
        let dropDownBlock = document.querySelector('.header__menu .dropdown');
        // console.log(dropDownBlock);

        // dropDownBlock.innerHTML = '';

        ganres.forEach(ganre => {
            dropDownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `);
        })
    };

    let renderAnimeDetails = (array, itemId) => {
        let animeObj = array.find(item => item.id == itemId);
        let imageBlock = document.querySelector('.anime__details__pic');
        let viewsBlock = imageBlock.querySelector('.view');
        let titleBlock = document.querySelector('.anime__details__title h3');
        let subTitileBlock = document.querySelector('.anime__details__title span');
        let descriptionBlock = document.querySelector('.anime__details__text p');
        let widgetList = document.querySelectorAll('.anime__details__widget ul li');
        let breadCrumbs = document.querySelector('.breadcrumb__links span');
        // console.log(array);
        // console.log(itemId);
        // console.log(animeObj);
        // console.log(widgetList);
        // console.log(breadCrumbs);
        if (animeObj) {
            imageBlock.dataset.setbg = animeObj.image;
            // viewsBlock.innerHTML = '';
            viewsBlock.insertAdjacentHTML('beforeend', `
                <div class="view"><i class="fa fa-eye"></i> ${animeObj.views}</div>
            `);

            titleBlock.textContent = animeObj.title;
            subTitileBlock.textContent = animeObj['original-title'];
            descriptionBlock.textContent = animeObj.description;

            widgetList[0].insertAdjacentHTML('beforeend', `
                <span>Date aired:</span>${animeObj.date}
            `);
            widgetList[1].insertAdjacentHTML('beforeend', `
                <span>Rating:</span>${animeObj.rating}
            `);
            widgetList[2].insertAdjacentHTML('beforeend', `
                <span>Genre:</span>${animeObj.tags.join(", ")}
            `);

            breadCrumbs.textContent = animeObj.ganre;

            document.querySelectorAll('.set-bg').forEach((elem) => {
                elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
            });

            setTimeout(() => {
                preloader.classList.remove('active');
            }, 300);

        } else {
            console.log('Аниме отсутствует!')
        }
        // // console.log(array);
        // // console.log(ganres);
        // let wrapper = document.querySelector('.product-page .col-lg-8');
        // // console.log(wrapper);
        // // wrapper.innerHTML = '';


        // ganres.forEach((ganre) => {
        //     // console.log(ganre);
        //     let productBlock = document.createElement('div');
        //     let listBlock = document.createElement('div');
        //     let list = array.filter(item => item.tags.includes(ganre));
        //     // console.log(list);

        //     listBlock.classList.add('row');
        //     productBlock.classList.add('mb-5');

        //     productBlock.insertAdjacentHTML('beforeend', `
        //         <div class="row">
        //             <div class="col-lg-8 col-md-8 col-sm-8">
        //                 <div class="section-title">
        //                     <h4>${ganre}</h4>
        //                 </div>
        //             </div>
        //             <div class="col-lg-4 col-md-4 col-sm-4">
        //                 <div class="btn__all">
        //                     <a href="/categories.html?=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
        //                 </div>
        //             </div>
        //         </div>
        //         `);

        //     list.forEach(item => {

        //         let tagsBlock = document.createElement('ul');
        //         item.tags.forEach(tag => {
        //             tagsBlock.insertAdjacentHTML("beforeend", `
        //                 <li>${tag}</li>
        //             `)
        //         })

        //         // console.dir(tagsBlock);

        //         listBlock.insertAdjacentHTML('beforeend', `
        //             <div class="col-lg-4 col-md-6 col-sm-6">
        //                 <div class="product__item">
        //                     <div class="product__item__pic set-bg" data-setbg="${item.image}">
        //                         <div class="ep">${item.rating} / 10</div>
        //                         <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
        //                     </div>
        //                     <div class="product__item__text">
        //                         ${tagsBlock.outerHTML}
        //                         <h5><a href="/anime-details.html?itemID=${item.id}">${item.title}</a></h5>
        //                     </div>
        //                 </div>
        //             </div>
        //         `);
        //     });

        //     productBlock.append(listBlock);
        //     wrapper.append(productBlock);

        //     wrapper.querySelectorAll('.set-bg').forEach((elem) => {
        //         elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
        //     });
        // })
    };

    // let renderTopAnime = (array) => {
    //     let wrapper = document.querySelector('.filter__gallery');
    //     // console.log(array)
    //     // wrapper.innerHTML = '';
    //     array.forEach(el => {
    //         // console.log(element);
    //         wrapper.insertAdjacentHTML('beforeend', `
    //             <div class="product__sidebar__view__item set-bg mix" data-setbg="${el.image}">
    //                 <div class="ep">${el.rating} / 10</div>
    //                 <div class="view"><i class="fa fa-eye"></i> ${el.views}</div>
    //                 <h5><a href="/anime-details.html">${el.title}</a></h5>
    //             </div>
    //             `)
    //     });
    //     // console.log(wrapper);
    //     wrapper.querySelectorAll('.set-bg').forEach((elem) => {
    //         elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    //     });
    // }

    fetch('https://anime-718a5-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        // fetch('./db-2.json')
        .then((response) => response.json())
        .then((data) => {
            let ganres = new Set();
            let ganreParams = new URLSearchParams(window.location.search).get('itemID');

            // console.log(window.location.search);
            // console.log(ganreParams);

            data.forEach((item) => {
                ganres.add(item.ganre);
            })
            // console.log(ganres);
            // renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));
            if (ganreParams) {
                renderAnimeDetails(data, ganreParams);
            } else {
                console.log('Аниме отсутствует!')
            }
            renderGanreList(ganres);
        });
};
detailData();