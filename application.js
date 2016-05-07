
SC.initialize({
  client_id: '5b1a886e9f0436e0664ebe931d8c543a',
  redirect_uri: 'http://192.168.1.104:8080/callback.html'
});


$("#login").on("click",function(){
   SC.connect().then(function() {
     return SC.get('/me');
   }).then(function(me) {
     alert('Hello, ' + me.username);
 });


   console.log(me.usermane);
});

$(document).ready(function(){
   SC.oEmbed('http://soundcloud.com/forss/sets/soulhack', {
    element: document.getElementById('sc-widget-2')
  });
});


(function(){
 var widgetIframe = document.getElementById('sc-widget'),
      widget       = SC.Widget(widgetIframe),
      newSoundUrl = 'http://api.soundcloud.com/tracks/13692671';

      widget.bind(SC.Widget.Events.READY, function() {
    // load new widget
         widget.bind(SC.Widget.Events.FINISH, function() {
            widget.load(newSoundUrl, {
               show_artwork: false
      });
    });
 });

}());


(function(){
 var widgetIframe = document.getElementById('sc-widget-1'),
      widget       = SC.Widget(widgetIframe);

     widget.bind(SC.Widget.Events.READY, function() {
    widget.bind(SC.Widget.Events.PLAY, function() {
      // get information about currently playing sound
      widget.getCurrentSound(function(currentSound) {
        console.log('sound ' + currentSound.get('') + 'began to play');
      });
    });
    // get current level of volume
    widget.getVolume(function(volume) {
      console.log('current volume value is ' + volume);
    });
    // set new volume level
    widget.setVolume(50);
    // get the value of the current position
 });

}());
