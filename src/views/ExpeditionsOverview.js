/**
 * Created by Gebruiker on 23-6-2017.
 */
/**
 * Created by Gebruiker on 14-6-2017.
 */
import {View} from 'backbone';
import _ from 'underscore';
import ArtworksRouter from '../routers/ArtworksRouter';

const ExpeditionsOverview = View.extend({
    router: null,
    templateExpeditionsOverview: '',

    initialize: function () {
        this.router = new ArtworksRouter();
        App.events.on('loadExpeditions', this.loadExpeditions, this);
        this.templateExpeditionsOverview = _.template(this.$('#template-expeditionsOverview').html());
    },

    /**
     * @desc wrapper function to load expeditions in rijksmuseum
     *
     */

    loadExpeditions: function () {
        this.collection.fetch({
            success: (collection) => this.successExpeditions(collection),
            error: (collection, response) => this.errorLoadExpeditions(collection, response)
        });
    },

    /**
     * Success Handler will add HTML of expedition to this $el
     *
     * @param collection
     */
    successExpeditions: function (collection) {
        this.$el.html(this.templateExpeditionsOverview({expeditions: this.collection.models}));
    },

    /**
     * @desc Error handler, trigger global event
     *
     * @param collection
     * @param response
     */
    errorLoadExpeditions: function (collection, response) {
        App.events.trigger('errorView', {
            message: response.responseJSON.error,
        });
    },

});

export default ExpeditionsOverview;