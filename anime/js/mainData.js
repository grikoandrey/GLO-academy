const mainData = () => {
    fetch('https://anime-718a5-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}
mainData();