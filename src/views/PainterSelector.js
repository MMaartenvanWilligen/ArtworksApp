import {View} from 'backbone';
import _ from 'underscore';
import ArtworksRouter from '../routers/ArtworksRouter';

const PainterSelector = View.extend({
    router: null,
    templateCollectionOverview: '',

    events: {
        "click select": "optionClicked",
    },

    initialize: function () {
        this.router = new ArtworksRouter();
        this.templatePainterSelector = _.template(this.$('#template-painterSelector').html());
        this.loadPainters();
    },

    /**
     *@desc Wrapper function to load the first page of painters through the collection
     *
     */
    loadPainters: function () {
        this.collection.getFirstPage({
            success: (collection) => this.loadNextPage(),
            error: (collection, response) => this.fetchErrorHandler(collection, response)
        });
    },

    /**
     *@desc on succes loadPainters
     * Wrapper function to load the next page till total pages is reached.
     * This is done to collect all painters in the collection of Rijksmuseum. They have limited
     * the total artobject you can retrieve. That is why here we iterate through the pages
     *
     */
    loadNextPage: function () {
        if (this.collection.hasNextPage() === true) {
            this.collection.getNextPage({
                remove: false,
                success: (collection) => this.loadNextPage(),
                error: (collection, response) => this.fetchErrorHandler(collection, response)
            })
        } else {
            this.renderSelectorView();
        }
    },

    /**
     * @desc Will add HTML of painters name to this $el
     *
     */
    renderSelectorView: function () {
        // filter all duplicate names. to make unique list
        let paintersUnique = _.uniq(this.collection.pluck('principalOrFirstMaker'));
        //merge the array together so that it is easier to collect the data in the template
        let merged = [].concat.apply([], paintersUnique);
        this.$el.html(this.templatePainterSelector({painters: merged}));
        //this.$el.html(this.templateArtworkDetail({artworkDetailMaker: model}));
    },

    /**
     * @desc Error handler, trigger global event
     *
     * @param collection
     * @param response
     */
    fetchErrorHandler: function (collection, response) {
        App.events.trigger('errorView', {
            message: response.responseJSON.error
        });
    },

    /**
     * @dec Click handler, retrieve data from target attributes and navigate router.
     *
     *
     * @param e
     */
    optionClicked: function (e) {
        e.preventDefault();

        //Get target the retrieve data properties
        let target = e.currentTarget;

        //get the option inside the target. here the painter name is stored
        let painter = $(target).find(':selected').attr('data-painter');

        //default value just load all artworks
        if(painter === "default"){
            let url = "collection";
            this.router.navigate(url, {trigger: true, replace: true});
        }else{
            let url = "painter/" + painter;

            //Use trigger & replace to update URL and make the router listen to change
            this.router.navigate(url, {trigger: true, replace: true});
        }
    }

});

export default PainterSelector;