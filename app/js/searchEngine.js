/**
 * 
 * Classe qui recherche les données dans l'API
 * 
 * 
 */

class SearchEngine {
    
    constructor(app) {
        this.app = app;
        this.urlAPI = 'https://api.deezer.com';
       
    }

    callAPISearch(inputValue) {
        console.log('call api', inputValue)

        // Appel AJAX de l'API

        let self = this;

        $.ajax({
            method: "GET",
            url: this.urlAPI + '/search?q=' + inputValue + "&limit=5&output=jsonp", 
            dataType: "jsonp",
            crossDomain: true
        }).done(function(data) {
            // fonction lancée au retour de l'appel
            console.log('data', data);

            // render autocomplete
            
            self.app.autoComplete.render(data);

        }).fail(function(error) {
            // Si une erreur survient lors de l'appel
            console.warn(error);
            
        });


    }

    callAPITrack(idTrack) {

    }

}