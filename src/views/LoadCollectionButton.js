import {View} from 'backbone';
import ArtworksRouter from '../routers/ArtworksRouter';

const LoadCollectionButton = View.extend({

    router: null,
    templateArtObject: '',

    events: {
        "click #loadArtworks": "clickButtonHandler"
    },

    initialize: function () {
        this.router = new ArtworksRouter;
    },

    /**
     * Click handler for button loadArtworks and navigate router
     *
     * @param e
     */
    clickButtonHandler: function (e) {
        e.preventDefault();

        let url = "collection";

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }

});

export default LoadCollectionButton