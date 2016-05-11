'use strict';

var React        = require('react')
var RouteHandler = require('react-router').RouteHandler

var Header       = require('./headerSection')
var MediaPlayer  = require('./mediaPlayer')

var soundcloudappApp   = React.createClass({

  render: function() {

    return (
      <div className="soundcloudappapp">
        <Header />
        <div className='content__wrapper'>
          <RouteHandler />
        </div>
        <MediaPlayer />
      </div>
    )
  }

})

module.exports = soundcloudappApp
