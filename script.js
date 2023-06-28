//ONLY CHANGE THE ACCOUNT NUMBER VARIABLE HERE
var accountNumber = 9967522;
// MAKE NO CHANGES

console.log(accountNumber);
var _dcq = _dcq || [];
var _dcs = { account: accountNumber, debug: true };


function subscriberGet() {
  var parser = new DOMParser();
  var obj;
    var requestOptions = {
      method: 'GET'
    };
    fetch('https://boardgamegeek.com/xmlapi2/collection?username=harry2caray', requestOptions)
        
        .then(response => response.text())
        .then(data => obj = data)
        .then(data => console.log(data));
  
  
    var xmlDoc = parser.parseFromString(obj,"text/xml");

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
