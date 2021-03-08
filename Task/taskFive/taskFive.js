
let cont = document.querySelector('#cont').innerHTML;
let btn = document.querySelector('button');

// Attached event listener to button
btn.addEventListener('click', function () {
    // Create a fetch request, default to GET request
    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => {
            // We check to see that the response is in the 200 range, if so we pass the data onward
            if (response.status >= 200 && response.status < 300) {
                // Convert the data to JSON
                return response.json();
            }
        })
        .then(data => {
            let output = cont;
            // We then take the data returned and limit the feed to 5 of the last objects
            // Of which each item is rendered in an html element
            data.slice(-5).forEach(item => {
                output += `
                    <div class="each-item">
                        <h2>Title: ${item.title}</h2>
                        <p>Completed: ${item.completed}<p>
                    </div>
                `;
            });
            document.getElementById('cont').innerHTML = output;
        });
});