define(
  'ephox.alloy.demo.DemoContent',

  [

  ],

  function () {
    var generate = function (num) {
      var s = '';
      for (var i = 0; i < num; i++) {
        s += '<p>Paragraph ' + i + ' is on this line, and it is quite long</p>';
      }
      return s;
    };

    return {
      generate: generate
    };
  }
);