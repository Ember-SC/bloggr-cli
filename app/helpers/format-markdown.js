registerBoundHelper Ember.Handlebars.helper('format-markdown', function(input) {
    var showdown = new Showdown.converter();
    return new Handlebars.SafeString(showdown.makeHtml(input));
});
