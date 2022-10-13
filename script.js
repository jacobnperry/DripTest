 const client = require('drip-nodejs')({
     token: "0672dc522d3b6827e4065c2866b59022",
     accountId: 9967522
 });




 var _dcq = _dcq || [];
 var _dcs = _dcs || {};
 _dcs.account = '9967522';

 (function() {
     var dc = document.createElement('script');
     dc.type = 'text/javascript';
     dc.async = true;
     dc.src = '//tag.getdrip.com/9967522.js';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(dc, s);
 })();


 window._dcq.push(['identify', { success: (resp) => console.log(resp) }]);

 window.dataLayer = window.dataLayer || [];

 function gtag() { dataLayer.push(arguments); }
 gtag('js', new Date());

 gtag('config', 'G-753PQ20YNC');

 gtag('event', 'visited page', { 'method': 'Google' });
 gtag('event', 'share', { 'method': 'Google' });

 function handle_submit(event) { // 3
     event.preventDefault(); // 4
     const output = {};
     for (const [k, v] of (new FormData(event.target).entries())) { // 5
         if (!!v) output[k] = v; // 6
     }
     _dcq.push(['identify', output]); // 7
     event.target.submit(); // 8
 }



 function fetchSub() {
     const idOrEmail = "jacob.perry@drip.com";

     client.fetchSubscriber(idOrEmail)
         .then((response) => {
             // Handle `response.body`
         })
         .catch((error) => {
             // Handle errors
         });
 }