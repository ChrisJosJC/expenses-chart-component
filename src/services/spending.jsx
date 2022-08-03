export default fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error);
    });
