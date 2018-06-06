/**
 * 
 * Classe générale
 * 
 */

class App {

    constructor() {
        this.searchEngine = null;
        this.autoComplete = null;
        this.track = null;
    }

    init() {
        // On instancie la classe searchEngine
        this.searchEngine = new SearchEngine(this);

        // On instancie la classe autoComplete
        this.autoComplete = new AutoComplete(this);
    }

    showTrack(data) {
        // On instancie la classe track
        this.Track = new Track(this, data);
    }
}