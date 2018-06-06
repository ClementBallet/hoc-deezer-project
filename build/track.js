'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 
 * Classe qui render la vue des données de l'artiste et de la chanson dans le widget
 * 
 * 
 */

var Track = function () {
    function Track(app, data) {
        _classCallCheck(this, Track);

        this.app = app;
        this.data = data;
        this.div = $("#track");

        this.render();
    }

    _createClass(Track, [{
        key: 'render',
        value: function render() {
            this.div.find('.album > p').text(this.data.album.title);
            this.div.find('.title > p').text(this.data.title);
            this.div.find('.author > p').text(this.data.artist.name);

            this.div.find('.bg2:before').css('backgroundImage', "url(" + this.data.album.cover_medium + ")");

            this.div.find('.button1').html('<audio src="' + this.data.preview + '" autoplay></audio>');
        }
    }, {
        key: 'togglePlayPause',
        value: function togglePlayPause() {}
    }, {
        key: 'vote',
        value: function vote() {}
    }]);

    return Track;
}();