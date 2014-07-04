'use strict';

app.factory('Post', function($resource){
    return $resource('https://glaring-fire-9829.firebaseio.com/posts/:id.json');
});