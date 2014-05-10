export default Ember.ObjectController.extend({
    content: null,
    isEditing: false,

    edit: function() {
        this.set('isEditing', true);
    },

    doneEditing: function() {
        this.set('isEditing', false);
        this.get('store').commit();
    },

    cancelEditing: function() {
        this.set('isEditing', false);
        var restored = this.get('content');
        restored.set('title', 'restored');
        restored.set('author', { name: 'restored auth'});
        this.set('content', restored);
    }
});

/*
 id: '1',
 title: "Rails is Omakase",
 author: { name: "d2h" },
 date: new Date('12-27-2012'),
 excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
 body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."

 */
