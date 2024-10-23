let preloader = () => {
    // console.log(document.querySelector('.preloder'));

    let preloader = document.querySelector('.preloder');

    // console.log(preloader);
    preloader.classList.add('active');

    setTimeout(() => {
        preloader.classList.remove('active');
    }, 500);
}

preloader();