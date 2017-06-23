import {Router} from 'backbone';

/**
 * Router for Artworks URL's
 *
 * @constructor
 */
const ArtworksRouter = Router.extend({

    /**
     * @desc defined routes with callback
     */
    routes: {
        "": "index",
        "collection": "loadCollectionOverview",
        "collection/detail/:objectNumber": "loadDetailArtworkView",
        "painter/:painterName": "loadPainterOverview"
    },

    initialize: function () {

    },

    /**
     * @desc Route callback, used to trigger global event.
     * @event global loadArtworksCollection
     */
    index: function () {
        App.events.trigger("loadExpeditions");
    },

    loadCollectionOverview: function () {
        App.events.trigger("loadArtworksCollection");
    },

    /**
     * @desc Route callback, used to trigger global event
     *
     * @param objectNumber
     */
    loadDetailArtworkView: function (objectNumber) {
        App.events.trigger("loadArtworkDetail", {
            objectNumber: objectNumber
        });
    },

    /**
     * @desc Route callback, used to trigger global event
     *
     * @param painter
     */
    loadPainterOverview: function (painter) {
        App.events.trigger("loadPainterCollectionOverview", {
            painter: painter
        });
    }
});

export default ArtworksRouter;


