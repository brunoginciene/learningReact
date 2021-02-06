function Home () {
    fetch('https://www.instagram.com/brunoginciene/?__a=1')
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
                let count = data.graphql.user.edge_followed_by.count
                console.log(count)
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });


    return(
        <div>
            <img src="https://instagram.fcgh5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/20394264_718299028566040_3077378195394134016_a.jpg?_nc_ht=instagram.fcgh5-1.fna.fbcdn.net&_nc_ohc=p2DqTgYwek8AX_fwVLI&tp=1&oh=37e3be36e73a53fd00831e786f550a87&oe=6047F5F8">
            </img>
        </div>
    ) 

    
}

export default Home