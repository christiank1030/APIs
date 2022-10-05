
let residentsButton = document.body.querySelector("button");

let clickLogger = ((event) => {
    console.log("Button clicked");

    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(response => {
        let { results } = response.data
        let { residents } = results[0]
        for(let i = 0; i < residents.length; i++) {
            axios.get(residents[i])
            .then(response => {
                let nameHeader = document.createElement('h2')
                let { name } = response.data
                nameHeader.textContent = name
                document.body.appendChild(nameHeader)
            })
        }
    })

})

residentsButton.addEventListener("click", clickLogger);