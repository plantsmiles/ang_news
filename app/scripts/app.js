'use strict';
/* global app:true */

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular.module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
]).constant('FIREBASE_URL', 'https://glaring-fire-9829.firebaseio.com/');

app.config(function ($routeProvider) {$routeProvider
    .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
    })
    .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
