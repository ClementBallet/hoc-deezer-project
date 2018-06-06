'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 
 * Classe qui render l'auto complétion dans la barre de recherche
 * 
 */

var AutoComplete = function () {
    function AutoComplete(app) {
        _classCallCheck(this, AutoComplete);

        this.app = app;

        this.initDOMElements();
        this.initEvents();
    }

    _createClass(AutoComplete, [{
        key: 'initDOMElements',
        value: function initDOMElements() {
            this.textInput = $("#textInput");

            this.suggestionContainer = $('#suggestion-container');
            this.suggestionUl = $('#suggestion');
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            this.textInput.on("keyup", this.onKeyPress.bind(this));
        }
    }, {
        key: 'onKeyPress',
        value: function onKeyPress(event) {
            //console.log("event", event);
            var inputValue = this.textInput.val();

            if (inputValue.length >= 3) {
                this.app.searchEngine.callAPISearch(inputValue);
            } else {
                this.close();
            }
        }
    }, {
        key: 'render',
        value: function render(data) {

            var listLiHtml = '';

            if (this.textInput.val().length >= 3) {

                for (var i = 0; i < data.data.length; i++) {
                    var track = data.data[i];
                    console.log(track);

                    listLiHtml += '<li id="' + track.id + '" >' + '<img src =' + track.album.cover + ">" + "<div class='results'><div>Track: " + track.title + " </div><div>Artist: " + track.artist.name + "</div><div>Album: " + track.album.title + '</div></div></li>';
                }

                this.suggestionContainer.show();
            }
            this.suggestionUl.html(listLiHtml);

            this.suggestionUl.find("li").on("click", this.onChooseTrack.bind(this));
        }
    }, {
        key: 'onChooseTrack',
        value: function onChooseTrack(event) {
            this.close();

            var idTrack = event.currentTarget.id;

            this.app.searchEngine.callAPITrack(idTrack);

            // let iframeContainer = $("#track");
            // let iframe = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=';
            // let idTrack = event.currentTarget.id;
            // let iframeEnd = '&app_id=1" width="572.5" height="600"></iframe>';

            // iframe += idTrack + iframeEnd;

            // iframeContainer.html(iframe);
            // console.log(iframe);
        }
    }, {
        key: 'close',
        value: function close() {
            this.suggestionContainer.hide();
        }
    }]);

    return AutoComplete;
}();