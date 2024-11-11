let params;

if (!location.search) {
    window.location.href = '/';
} else {
    params = JSON.parse(window.decodeURIComponent(location.search).split("=")[1]);
}

let title = params['title'];
let page = params['page'];

document.getElementById('title').innerHTML = decodeURIComponent(title);

let newElems = document.getElementById('moviecontainer');

let prevButton = document.getElementById("Previous");
let nextButton = document.getElementById("Next");

while(newElems.children.length != 0) {
    newElems.removeChild(newElems.firstElementChild);
}

fetch(`/api/search/${title}/page/${page}`)
    .then((data) => {
        console.log(data);
        return data.json();
    })
    .then((data) => {

        let maxPages = Math.ceil(data['totalResults'] / 10);

        document.getElementById('maxPages').innerHTML = maxPages;

        if (page != 1) {
            prevButton.disabled = false;
        };
        
        if (page != maxPages && maxPages != 1) {
            nextButton.disabled = false;
        };

        for (let index = 0; index < data['Search'].length; index++) {

            let moviedata = data['Search'][index];

            // Creating an element displaying movies
            let anchorNode = document.createElement('a');

            let params = {
                imdb: moviedata['imdbID'],
            };
            let url = '/movie?params=' + encodeURIComponent(JSON.stringify(params));

            anchorNode.setAttribute('href', url);
            console.log(anchorNode);

            let divNode = document.createElement('div');
            divNode.setAttribute("class", 'movienode');
            
            let titleNode = document.createElement('p');
            let titleText = document.createTextNode(`Title: ${moviedata["Title"]}`);
            titleNode.appendChild(titleText);
            divNode.appendChild(titleNode);

            let yearNode = document.createElement('p');
            let yearText = document.createTextNode(`${moviedata['Year']}}`);
            yearNode.appendChild(yearText);
            divNode.appendChild(yearNode);

            anchorNode.appendChild(divNode);

            document.getElementById('moviecontainer').appendChild(anchorNode);

        };
    }).catch((error) => console.log(error));

    
document.getElementById('pageSpan').innerHTML = page;

prevButton.addEventListener("click", (e) => {

    e.preventDefault();
    
    let params = {
        title: title,
        page: page - 1
    }
    let url = '/search?params=' + encodeURIComponent(JSON.stringify(params));

    window.location.href = url;

})

nextButton.addEventListener("click", (e) => {

    e.preventDefault();

    let params = {
        title: title,
        page: page + 1
    }
    let url = '/search?params=' + encodeURIComponent(JSON.stringify(params));

    window.location.href = url;

});