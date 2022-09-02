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

  window.dataLayer = window.dataLayer || [];

  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'G-753PQ20YNC');

  gtag('event', 'visited page', {'method': 'Google'});
  gtag('event', 'share', {'method': 'Google'});


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic e3thcGlUb2tlbn19Og==");

var raw = JSON.stringify({
  "subscribers": [
    {
      "email": "jacob.perry@drip.com",
      "time_zone": "America/Los_Angeles",
      "status": "active",
      "tags": [
        "22"
      ],
      "custom_fields": {}
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.getdrip.com/v2/9967522/subscribers", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  function handle_submit(event) { // 3
      event.preventDefault(); // 4
      const output = {};
      for (const [k, v] of (new FormData(event.target).entries())) { // 5
          if (!!v) output[k] = v; // 6
      }
      _dcq.push(['identify', output]); // 7
      event.target.submit(); // 8
  }