//ONLY CHANGE THE ACCOUNT NUMBER VARIABLE HERE
var accountNumber = 9967522;
// MAKE NO CHANGES

console.log(accountNumber);
var _dcq = _dcq || [];
var _dcs = { account: accountNumber, debug: true };


async function fetchSub() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Basic 0672dc522d3b6827e4065c2866b59022','Access-Control-Allow-Origin','*', 'Origin','true');
    console.log(myHeaders.get('Authorization'));
    var requestOptions = {
        method: 'GET',
        mode: 'no-cors',
        headers: myHeaders,
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

window._dcq.push(['identify', { success: (resp) => console.log(resp) }]);