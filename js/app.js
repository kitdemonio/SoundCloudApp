'use strict';

/* App Module */

var SoundCloudApp = angular.module('SoundCloudApp', [
    'soundcloud-widget',
]);

function getLogin() {
    SC.connect(function () {
        SC.get("/me", function (response) {
            console.log("Welcome" + response.username);
        });
    });
}