
const baseURL= `https://api.github.com`;
const list = ``;






//function to generate the HTML for the new results
function generateResults(response){
    $('#js-results-list').empty();
    console.log(response)
    console.log(response.length);
    for (let i=0; i<response.length; i++){
        console.log('Loop started');
    $('#js-results-list').append(`<li><h3><a href="${response[i].html_url}" target="_blank">${response[i].name}</a></h3></li>`)
    }
    //$('#js-results').removeClass('hidden');
}

//function to get the repos for the submitted handle
function getRepos(handle){
    const endpointURL = `/users/${handle}/repos`;
    const URL = baseURL.concat(endpointURL);

    fetch(URL)
    .then(response => response.json())
    .then(responseJson => generateResults(responseJson))

}

//watchForm function to watch the submit button
function watchForm(){
    $('#js-form').submit(event =>{
        event.preventDefault();
        const handle = $('#js-handle').val();
        this.value='';
        getRepos(handle);
    })
}



//call watchForm on page ready
$(watchForm)