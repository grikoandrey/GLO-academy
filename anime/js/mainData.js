const mainData = () => {
    fetch('./db.json')
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data.anime);
        });
}
mainData();