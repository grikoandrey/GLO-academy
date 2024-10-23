const bgElements = () => {
    let elements = document.querySelectorAll('.set-bg');

    elements.forEach((elem, index, array) => {
        // let src = elem.dataset.setbg;
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    });

    // console.log(elements);
    // for (let i = 0; i < elements.length; i++) {
    //     // console.dir(elements[i]);
    //     let src = elements[i].dataset.setbg;

    //     elements[i].style.backgroundImage = `url(${src})`;
    //     // console.log(src);
    //     // console.dir(elements[i]);
    // }

    //это пробный код для понимания работы методов с массивом
    // let array = [5, 3, 2, 4, 1];
    // let array2 = [
    //     {
    //         id: 0,
    //         value: 100
    //     },
    //     {
    //         id: 2,
    //         value: 300
    //     },
    //     {
    //         id: 1,
    //         value: 200
    //     },
    // ]
    // let newArray = array.filter((item) => item <= 3);
    // let new2Array = array2.sort((a, b) => a.value - b.value);
    // console.log(newArray);
    // console.log(new2Array);
}
bgElements();