// 'use strict';

/* Controllers */
SoundCloudApp.controller('appStreamCtrl', function ($scope, $timeout, $sce) {
    SC.get('/tracks').then(function (tracks) {
        $timeout(function() {
            $scope.tracks = tracks;
            console.log(tracks);
            angular.forEach( $scope.tracks, function(track) {
                track.url = $sce.trustAsResourceUrl('https://w.soundcloud.com/player/?url=' + track.uri +'&show_artwork=true');
            });
        });
    });
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

