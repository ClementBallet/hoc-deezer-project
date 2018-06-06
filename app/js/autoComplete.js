/**
 * 
 * Classe qui render l'auto complétion dans la barre de recherche
 * 
 */

 class AutoComplete {

    constructor(app) {
        this.app = app;
        
        this.initDOMElements();
        this.initEvents();

    }

    initDOMElements() {
        this.textInput = $( "#textInput" );
        
        this.suggestionContainer = $('#suggestion-container');
        this.suggestionUl = $('#suggestion');
    }

    initEvents() {
        this.textInput.on("keyup", this.onKeyPress.bind(this));
    }

    onKeyPress(event) {
        //console.log("event", event);
        let inputValue = this.textInput.val();

        if(inputValue.length >= 3){
            this.app.searchEngine.callAPISearch(inputValue);
        }
        else{
            this.close();
        }
    }

    render(data) {
        
        let listLiHtml = '';

        if(this.textInput.val().length >= 3){
        
            for(let i = 0; i < data.data.length; i++) {
                let track = data.data[i];
                console.log(track);
                
                listLiHtml += '<li id="'+ track.id +'" >'+ '<img src =' + track.album.cover + ">" + "<div class='results'><div>Track: " + track.title + " </div><div>Artist: " + track.artist.name + "</div><div>Album: " + track.album.title + '</div></div></li>';
            }

            this.suggestionContainer.show();
        } 
        this.suggestionUl.html(listLiHtml);

        this.suggestionUl.find("li").on("click", this.onChooseTrack.bind(this));
    }

    onChooseTrack(event) {
        this.close();

        let idTrack = event.currentTarget.id;
        
        this.app.searchEngine.callAPITrack(idTrack);
        
        // let iframeContainer = $("#track");
        // let iframe = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=';
        // let idTrack = event.currentTarget.id;
        // let iframeEnd = '&app_id=1" width="572.5" height="600"></iframe>';

        // iframe += idTrack + iframeEnd;
        
        // iframeContainer.html(iframe);
        // console.log(iframe);
        
    }

    close() {
        this.suggestionContainer.hide();  
    }

    
 }