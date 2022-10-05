let residentsButton = document.body.querySelector("button");

let clickLogger = ((event) => {
    console.log("Button clicked");

    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(response => {
        
    })

})

residentsButton.addEventListener("click", clickLogger);