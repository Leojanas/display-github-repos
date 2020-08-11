
const baseURL= `https://api.github.com`;
const list = ``;






//function to generate the HTML for the new results
function generateResults(response){
    $('#js-results-list').empty();
    for (let i=0;i<response.length; i++){
    $('#js-results-list').append(`<li><h2><a src="${response[i].url}"></a>${response[i].name}</h2></li>`)
    }
    $('#js-results').removeClass('hidden');
}

//function to get the repos for the submitted handle
function getRepos(handle){
    const endpointURL = `/users/:${handle}/repos`;
    const URL = baseURL.concat(endpointURL);

    fetch(URL)
    .then(response => response.JSON)
    .then(response.JSON => generateResults(response.JSON))

}

//watchForm function to watch the submit button
function watchForm(){
    $('#js-form').submit(event =>{
        event.preventDefault();
        const handle = $('#js-handle').val();
        getRepos(handle);
    })
}



//call watchForm on page ready
$(watchForm)