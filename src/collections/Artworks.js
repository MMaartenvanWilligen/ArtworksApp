/**
 * Created by Gebruiker on 14-6-2017.
 */
import {Collection} from 'backbone';
import Artwork from '../models/Artwork';
import Storage from '../../config';

/**
 * collection of artworks
 *
 * @constructor
 */

const Artworks = Collection.extend({
    model: Artwork,
    url: 'https://www.rijksmuseum.nl/api/nl/collection?key=' + Storage.getAccessToken() + '&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614&imgonly=true',

    parse: function (data) {

        if (data.artObjects) {
            return data.artObjects;
        }
        else {
            return data
        }
    }
});

export default Artworks;


