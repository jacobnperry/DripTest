var raw = "";

var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
};

var promise = Promise.race([
    fetch('https://boardgamegeek.com/xmlapi/collection/harry2caray', requestOptions)
        .then(response => response.text()),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 100)
    )
]);

promise.then(result => console.log(result)),
    promise.catch(error => console.log(error));