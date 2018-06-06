/**
 * 
 * Classe qui render la vue des données de l'artiste et de la chanson dans le widget
 * 
 * 
 */

 class Track {
     
    constructor(app, data) {
        this.app = app;
        this.data = data;
        this.div = $( "#track" );

        this.render();
    }

    render() {
        this.div.find('.album > p').text(this.data.album.title);
        this.div.find('.title > p').text(this.data.title);
        this.div.find('.author > p').text(this.data.artist.name);
       
        this.div.find('.bg2:before').css('backgroundImage', "url(" + this.data.album.cover_medium + ")");

        this.div.find('.button1').html('<audio src="' + this.data.preview + '" autoplay></audio>');



    }

    togglePlayPause() {

    }

    vote() {
        
    }
 }