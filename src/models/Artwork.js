import {Model} from 'backbone';
import Storage from '../../config';

/**
 * @desc model for every Artwork in the collection
 *
 * @constructor
 */
const Artwork = Model.extend({

    url: function () {
        return "https://www.rijksmuseum.nl/api/nl/collection/" + this.get('id') + "?key=" + Storage.getAccessToken() + "&format=json"
    },

    /**
     * @desc Parse to fill the model only with artObject
     *
     * @param data
     * */

    parse: function (data) {

        if (data.artObject) {
            return data.artObject;
        }
        else {
            return data
        }
    }
});

export default Artwork;
