function sendHttpGoogle() {
    console.log("yes");
    fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        body: JSON.stringify({title: 'Some really important work to finish'}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });
}
function sendHttpYakov() {
    fetch('https://yakovMendelson.com/', {
        method: 'POST',
        body: JSON.stringify({title: 'Some really important work to finish'}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    }).catch(err=>console.log(err));
}