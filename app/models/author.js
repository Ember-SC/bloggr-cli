var Author = DS.Model.extend ({
    name: DS.attr('string'),
    posts: DS.hasMany('post')
});

Author.reopenClass({
FIXTURES : [
    {
    id: "1",
    name: "d2h"
    }
    ]
});

export default Author