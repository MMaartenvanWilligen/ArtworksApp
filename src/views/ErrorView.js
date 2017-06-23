
/**
 * Created by Gebruiker on 14-6-2017.
 */
import {View} from 'backbone';
import _ from 'underscore';
import ArtworksRouter from '../routers/ArtworksRouter';

const ErrorView = View.extend({
    router: null,
    templateError: '',

    initialize: function () {
        this.router = new ArtworksRouter();
        this.templateError = _.template(this.$('#template-error').html());
        App.events.on('errorView', this.errorHandler, this);
    },

    /**
     * @desc Success Handler will add HTML of message to this $el
     *
     * @param message
     */
    errorHandler: function (message) {
        this.$el.html(this.templateError({message: message}));
    },

});

export default ErrorView;