import _ from 'underscore';
import {Events} from 'backbone';
import Artworks from './collections/Artworks';
import Painters from './collections/Painters';
import Expeditions from './collections/Expeditions';
import CollectionOverview from './views/CollectionOverview';
import ArtworkDetail from './views/ArtworkDetail';
import PainterSelector from './views/PainterSelector';
import LoadCollectionButton from './views/LoadCollectionButton';
import ErrorView from './views/ErrorView';
import ExpeditionsOverview from './views/ExpeditionsOverview';

(function () {
    let setGlobalVariables = function () {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function () {
        setGlobalVariables();
        //collections
        let artworksCollection = new Artworks();
        let paintersCollection  = new Painters();
        let expeditionsCollection = new Expeditions();

        //views
        new ErrorView({el: "#errorMessage"});
        new LoadCollectionButton({el: "#LoadCollection"});
        new CollectionOverview({el: "#ArtworksOverview", collection: artworksCollection});
        new ArtworkDetail({el: "#ArtworkDetail"});
        new PainterSelector ({el: "#PainterSelector", collection: paintersCollection});
        new ExpeditionsOverview ({el: "#ExpeditionsOverview", collection: expeditionsCollection});

        Backbone.history.start({pushState: true, root: '/ArtworksApp'});

    };

    window.addEventListener('load', init);
})();

