/**
 * Created by Gebruiker on 14-6-2017.
 */
import {View} from 'backbone';
import _ from 'underscore';
import ArtworksRouter from '../routers/ArtworksRouter';

const CollectionOverview = View.extend({
    router: null,
    templateCollectionOverview: '',

    events: {
        "click a": "triggerDetailView"
    },

    initialize: function () {
        App.events.on('loadArtworksCollection', this.loadArtworks, this);
        App.events.on('loadPainterCollectionOverview', this.loadArtworksPainter, this);
        this.router = new ArtworksRouter();
        this.templateCollectionOverview = _.template(this.$('#template-artworksOverview').html());
    },

    /**
     *@desc Wrapper function to load the Artworks through the collection
     *
     */
    loadArtworks: function () {
        this.collection.fetch({
            success: (collection) => this.successLoadArtworks(collection),
            error: (collection, response) => this.errorLoadArtworksCollection(collection, response)
        });
    },

    /**
     * @desc wrapper function to load artwoks from specific painterin overview
     *
     * @param data
     */
    loadArtworksPainter: function (data) {
        this.collection.fetch({data: {q: data.painter},
            success: (collection) => this.successLoadArtworks(collection),
            error: (collection, response) => this.errorLoadArtworksCollection(collection, response)
        });
    },
    /**
     * Success Handler will add HTML of artworks to this $el
     *
     * @param collection
     */
    successLoadArtworks: function (collection) {
        this.$el.html(this.templateCollectionOverview({artworks: this.collection.models}));
    },

    /**
     * @desc Error handler, trigger global event
     *
     * @param collection
     * @param response
     */
    errorLoadArtworksCollection: function (collection, response) {
        App.events.trigger('errorView', {
            message: response.responseJSON.error,
        });
    },

    /**
     * Click handler, retrieve data from target attributes and navigate router.
     *
     * @param e
     */
    triggerDetailView: function (e) {
        e.preventDefault();

        //Get target the retrieve data properties
        let target = e.currentTarget;
        let url = 'collection/detail/' + target.dataset['objectnumber'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }

});

export default CollectionOverview;