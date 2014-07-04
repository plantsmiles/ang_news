'use strict';

app.controller('PostsCtrl', function($scope, Post) {
    $scope.posts = Post.all;

    $scope.post = {url: 'http://', 'title': ''};

    $scope.submitPost = function () {
        Post.create($scope.post).then(function(ref) {
            $location.path('/posts/' + ref.name());
        });
    };

    $scope.deletePost = function (postId) {
        Post.delete(postId);
    };
});