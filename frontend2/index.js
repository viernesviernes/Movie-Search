let inputBox = document.getElementById("searchbox");
let search = document.getElementById("search");

search.disabled = true;

search.addEventListener('click', (e) => {

    e.preventDefault();

    let params = {
        title: inputBox.value,
        page: 1
    }
    let url = '/search?params=' + encodeURIComponent(JSON.stringify(params));

    window.location.href = url;

})

inputBox.addEventListener('input', () => {
    
    let newElems = document.getElementById('moviecontainer');

    // Removes all child elements of moviecontainer after every reset
    while(newElems.children.length != 0) {
        newElems.removeChild(newElems.firstElementChild);
    }

    if (inputBox.value != '') {
        search.disabled = false;
        
        // Fetches the first few movies / tv shows
        fetch(`/api/search/${inputBox.value}`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {

            for (let index = 0; index < data['Search'].length; index++) {

                let moviedata = data['Search'][index];

                // Creating an element displaying movies
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

                document.getElementById('moviecontainer').appendChild(divNode);

            };
        }).catch((error) => console.log(error));

    } else {
        search.disabled = true;
    }
});

