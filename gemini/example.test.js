var gemini = require('gemini');
gemini.suite('button', function(suite) {
  suite.setUrl('/app/index.html')
    .setCaptureElements('.class')
    .before(function(actions, find) {
        this.button = find('.class');
    })
    .capture('plain')
    .capture('hover', function(actions, find) {
        actions.mouseMove(this.button);
    })
    .capture('pressed', function(actions, find) {
        actions.mouseDown(this.button);
    })
    .capture('clicked', function(actions, find) {
        actions.mouseUp(this.button);
    });
});
