head.load(
  "js/min/jquery-1.11.1.min.js", 
  "js/min/jquery.formstyler.min.js",
  "js/main.js"
);

head.test({
  test    : (head.browser.ie && head.browser.version === 8),
  success : [ "js/min/pie.js",
              "js/min/selectivizr.min.js",
              "js/min/placeholdr.min.js" ],
  failure : [],
  callback: function() {
    var selectors = '';
    $(selectors).each(function() {
      PIE.attach(this);
    });
  }
});
