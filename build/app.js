"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 
 * Classe générale
 * 
 */

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.searchEngine = null;
        this.autoComplete = null;
        this.track = null;
    }

    _createClass(App, [{
        key: "init",
        value: function init() {
            // On instancie la classe searchEngine
            this.searchEngine = new SearchEngine(this);

            // On instancie la classe autoComplete
            this.autoComplete = new AutoComplete(this);
        }
    }, {
        key: "showTrack",
        value: function showTrack(data) {
            // On instancie la classe track
            this.Track = new Track(this, data);
        }
    }]);

    return App;
}();