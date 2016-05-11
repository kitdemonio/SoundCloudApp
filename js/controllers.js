// 'use strict';

/* Controllers */
SoundCloudApp.controller('appStreamCtrl', function ($scope, $timeout, $sce) {
    SC.get('/tracks', {
        title:	'Green day'
    }).then(function (tracks) {
        $timeout(function() {
            $scope.tracks = tracks;
            angular.forEach( $scope.tracks, function(track) {
                track.url = $sce.trustAsResourceUrl('https://w.soundcloud.com/player/?url=' + track.uri +'&show_artwork=true&show_comments=true&show_user=true&show_playcount=true&download=false');
            });
        });
    });
    $scope.signIn = function() {
        SC.connect(function () {
            SC.get("/me", function (response) {
                console.log("Welcome" + response.username);
            });
        });
    }
});

function embed (id) {
    SC.oEmbed("http://soundcloud.com/" + id // user or playlist to embed
        , { color: "ff0066"
            , auto_play: true
            , maxwidth: 500
            , maxheight: 1000
            , show_comments: true } // options
        , document.getElementById("scWidget") // what element to attach player to
    );
}

