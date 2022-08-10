//ONLY CHANGE THE ACCOUNT NUMBER VARIABLE HERE
var accountNumber = 9967522;
// MAKE NO CHANGES

console.log(accountNumber);
var _dcq = _dcq || [];
var _dcs = { account: accountNumber, debug: true };


var dc = document.createElement('script');
dc.type = 'text/javascript';
dc.async = true;
dc.src = 'https://tag.getdrip.com/' + accountNumber + '.js';
console.log(dc.src);
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(dc, s);



function handle_submit(event) { // 3
    event.preventDefault(); // 4
    const output = {};
    for (const [k, v] of (new FormData(event.target).entries())) { // 5
        if (!!v) output[k] = v; // 6
    }
    _dcq.push(['identify', output]); // 7
    event.target.submit(); // 8
}