/**
 * Created by Gebruiker on 20-6-2017.
 */
import {Collection} from 'backbone';
import Painter from '../models/Painter';
import Storage from '../../config';
import PageableCollection from 'backbone.paginator';

/**
 * collection of painters
 * @desc Uses PageableCollection to track the pagination.
 * @constructor
 */

const Painters = PageableCollection.extend({

    model: Painter,
    url: 'https://www.rijksmuseum.nl/api/nl/collection?key=' + Storage.getAccessToken() + '&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614&imgonly=true',

    /**
     * @desc set queryparamters. Set the default queries parameters, from backbone.paginator, to the paramters that the rijksmuseum API understands.
     *
     * */

    queryParams: {
        currentPage: "p",
        pageSize: "ps"
    },

    /**
     * @desc set state for backbone.paginator
     * */

    state: {
        firstPage: 1,
        pageSize: 100,
        totalRecords: 101,
    },

    /**
     * @desc Override the parse function. First, to save the total records from the data.
     * The backbone.paginator requires this to determine how many pages there are in total.
     * Second, to only fill the models with artObject. this is the data we need to use from the api
     *
     * @param data
     * */

    parse: function (data) {
        this.state.totalRecords = data.count;
        if (data.artObjects) {
            return data.artObjects;
        } else {
            return data
        }
    }
});

export default Painters;

