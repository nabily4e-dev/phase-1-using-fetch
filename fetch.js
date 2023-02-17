fetch("http://api.open-notify.org/astros.json")
.then(function (response) {
    console.log(response);
    return response
}).then(function (data) {
    console.log(data);
})