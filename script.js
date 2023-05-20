<<<<<<< HEAD
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
=======
//ONLY CHANGE THE ACCOUNT NUMBER VARIABLE HERE
var accountNumber = 9967522;
// MAKE NO CHANGES

console.log(accountNumber);
var _dcq = _dcq || [];
var _dcs = { account: accountNumber, debug: true };
var tagged = false;


window.sleeknoteSiteData || (window.sleeknoteSiteData = []);

let lastKnownScrollPosition = 0;

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (lastKnownScrollPosition > 20 && !tagged) {




        console.log("down" + lastKnownScrollPosition);

        siteData();

    }
});

function siteData() {
    console.log("sitedata function")
    window.sleeknoteSiteData.push({ 'startinAttribute': 'start' });

    console.log(window.sleeknoteSiteData);
    tagged = true;

}

async function fetchSub() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Basic 0672dc522d3b6827e4065c2866b59022', 'Access-Control-Allow-Origin', '*', 'Origin', 'true');
    console.log(myHeaders.get('Authorization'));
    var requestOptions = {
        method: 'GET',
        mode: 'no-cors',
        Authorization: 'Basic 0672dc522d3b6827e4065c2866b59022',
        redirect: 'follow'
    };
    var subs = await fetch('https://api.getdrip.com/v2/9967522/subscribers', requestOptions);

    console.log(subs.json());
}




(function() {
    var dc = document.createElement('script');
    dc.type = 'text/javascript';
    dc.async = true;
    dc.src = 'https://tag.getdrip.com/' + accountNumber + '.js';
    console.log(dc.src);
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(dc, s);
})();




function handle_submit(event) { // 3
    event.preventDefault(); // 4
    const output = {};
    for (const [k, v] of (new FormData(event.target).entries())) { // 5
        if (!!v) output[k] = v; // 6
    }
    _dcq.push(['identify', output]); // 7
    event.target.submit(); // 8
}

function apiPost() {
    _dcq.push(["identify", {
        email: "jacob.perry@drip.com",
        success: function(response) {
            // Call a method with the response object
            // Success callback is optional
        }
    }]);

    window._dcq.push(['track', 'Visited a page', { url: "window.location.href" }]);

}
>>>>>>> 21293f31152f1632298bf0495b4cd7408b90c2a9
