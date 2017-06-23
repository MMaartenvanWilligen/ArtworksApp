/**
 * Created by Gebruiker on 20-6-2017.
 */
/**
 * Created by Gebruiker on 14-6-2017.
 */
import {View} from 'backbone';
import _ from 'underscore';
import ArtworksRouter from '../routers/ArtworksRouter';
import Artwork from '../models/Artwork'


const ArtworkDetail = View.extend({
    router: null,
    templateCollectionOverview: '',

    /**
     * @desc initialize
     * bind event to view
     * initialize router
     *
     */
    initialize: function () {
        App.events.on('loadArtworkDetail', this.loadDetailArtwork, this);
        this.router = new ArtworksRouter();
        this.templateArtworkDetail = _.template(this.$('#template-artworkDetail').html());
    },

    /**
     * @desc Wrapper function to load the artwork details through the model
     * Through model because it is not a collection but one artwork.
     * @param data
     */
    loadDetailArtwork: function (data) {
        let detailArtwork = new Artwork({id: data.objectNumber});
        detailArtwork.fetch({
            success: (model) => this.successLoadArtworkDetail(model),
            error: (model, response) => this.errorLoadArtworkDetail(model, response)
        });
    },

    /**
     * @desc Success Handler will add HTML of artwork to this $el
     *
     * @param model
     */
    successLoadArtworkDetail: function (model) {
        this.$el.html(this.templateArtworkDetail({artworkDetail: model}));
    },

    /**
     * @desc On error, trigger global event
     *
     * @param model
     * @param response
     */
    errorLoadArtworkDetail: function (model, response) {
        App.events.trigger('errorView', {
            message: response.responseJSON.error
        });
    }

});

export default ArtworkDetail;