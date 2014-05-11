export default Ember.ObjectController.extend({
    isEditing: false,


    edit: function() {
	       this.set('oldTitle' , this.get('title'));
         this.set('oldAuthor', this.get('author'));
         this.set('oldExcerpt', this.get('excerpt'));
         this.set('oldBody', this.get('body')) ;
         this.set('isEditing', true);
    },

    doneEditing: function() {
        this.set('isEditing', false);
        this.get('store').commit();
    },

    cancelEditing: function() {
	     //this.set('content', this.get('oldContent'));
       this.set('title' , this.get('oldTitle'));
       this.set('author', this.get('oldAuthor'));
       this.set('excerpt', this.get('oldExcerpt'));
       this.set('body', this.get('oldBody'));
	     this.set('isEditing', false);
  	//this.set('content', this.get('oldContent'));

    }


});
