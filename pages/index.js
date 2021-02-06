import { useState } from 'react'

function Home () {
    fetch("https://www.instagram.com/brunoginciene/?__a=1")
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            console.log(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
    
    return (
        <div>
            <h1>Teste</h1>
        </div>
    )
    //"https://www.instagram.com/$otherPage/?__a=1"
}

export default Home