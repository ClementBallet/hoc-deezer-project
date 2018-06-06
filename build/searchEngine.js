'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 
 * Classe qui recherche les données dans l'API
 * 
 * 
 */

var SearchEngine = function () {
    function SearchEngine(app) {
        _classCallCheck(this, SearchEngine);

        this.app = app;
        this.urlAPI = 'https://api.deezer.com';
    }

    _createClass(SearchEngine, [{
        key: 'callAPISearch',
        value: function callAPISearch(inputValue) {
            console.log('call api', inputValue);

            // Appel AJAX de l'API

            var self = this;

            $.ajax({
                method: "GET",
                url: this.urlAPI + '/search?q=' + inputValue + "&limit=5&output=jsonp",
                dataType: "jsonp",
                crossDomain: true
            }).done(function (data) {
                // fonction lancée au retour de l'appel
                console.log('data', data);

                // render autocomplete

                self.app.autoComplete.render(data);
            }).fail(function (error) {
                // Si une erreur survient lors de l'appel
                console.warn(error);
            });
        }
    }, {
        key: 'callAPITrack',
        value: function callAPITrack(idTrack) {
            console.log('call api track', idTrack);

            // Appel AJAX de l'API
            var self = this;

            $.ajax({
                method: "GET",
                url: this.urlAPI + '/track/' + idTrack + "?output=jsonp",
                dataType: "jsonp",
                crossDomain: true
            }).done(function (data) {
                // fonction lancée au retour de l'appel
                console.log('data', data);

                // render autocomplete

                self.app.showTrack(data);
            }).fail(function (error) {
                // Si une erreur survient lors de l'appel
                console.warn(error);
            });
        }
    }]);

    return SearchEngine;
}();