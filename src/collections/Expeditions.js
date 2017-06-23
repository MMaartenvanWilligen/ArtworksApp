/**
 * Created by Gebruiker on 23-6-2017.
 */
import {Collection} from 'backbone';
import Expedition from '../models/Expedition';
import Storage from '../../config';

/**
 * collection of expeditions
 *
 * @constructor
 */

const Expeditions = Collection.extend({
    model: Expedition,

    url:function () {
        return 'https://www.rijksmuseum.nl/api/nl/agenda/2017-06-23?key='+ Storage.getAccessToken() + '&format=json';
    },

    parse: function (data) {

        if (data.options) {
            return data.options;
        }
        else {
            return data
        }
    }
});

export default Expeditions;
