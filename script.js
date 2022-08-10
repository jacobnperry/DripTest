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





  function handle_submit(event) { // 3
      event.preventDefault(); // 4
      const output = {};
      for (const [k, v] of (new FormData(event.target).entries())) { // 5
          if (!!v) output[k] = v; // 6
      }
      _dcq.push(['identify', output]); // 7
      event.target.submit(); // 8
  }