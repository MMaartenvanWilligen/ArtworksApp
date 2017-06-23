'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _Artwork = require('../models/Artwork');

var _Artwork2 = _interopRequireDefault(_Artwork);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * collection of artworks
 *
 * @constructor
 */

var Artworks = _backbone.Collection.extend({
    model: _Artwork2.default,
    url: 'https://www.rijksmuseum.nl/api/nl/collection?key=' + _config2.default.getAccessToken() + '&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614&imgonly=true',

    parse: function parse(data) {

        if (data.artObjects) {
            return data.artObjects;
        } else {
            return data;
        }
    }
}); /**
     * Created by Gebruiker on 14-6-2017.
     */
exports.default = Artworks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9ucy9BcnR3b3Jrcy5qcyJdLCJuYW1lcyI6WyJBcnR3b3JrcyIsImV4dGVuZCIsIm1vZGVsIiwidXJsIiwiZ2V0QWNjZXNzVG9rZW4iLCJwYXJzZSIsImRhdGEiLCJhcnRPYmplY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsV0FBVyxxQkFBV0MsTUFBWCxDQUFrQjtBQUMvQkMsNEJBRCtCO0FBRS9CQyxTQUFLLHNEQUFzRCxpQkFBUUMsY0FBUixFQUF0RCxHQUFpRixpRkFGdkQ7O0FBSS9CQyxXQUFPLGVBQVVDLElBQVYsRUFBZ0I7O0FBRW5CLFlBQUlBLEtBQUtDLFVBQVQsRUFBcUI7QUFDakIsbUJBQU9ELEtBQUtDLFVBQVo7QUFDSCxTQUZELE1BR0s7QUFDRCxtQkFBT0QsSUFBUDtBQUNIO0FBQ0o7QUFaOEIsQ0FBbEIsQ0FBakIsQyxDQWJBOzs7a0JBNEJlTixRIiwiZmlsZSI6IkFydHdvcmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgR2VicnVpa2VyIG9uIDE0LTYtMjAxNy5cclxuICovXHJcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSAnYmFja2JvbmUnO1xyXG5pbXBvcnQgQXJ0d29yayBmcm9tICcuLi9tb2RlbHMvQXJ0d29yayc7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG4vKipcclxuICogY29sbGVjdGlvbiBvZiBhcnR3b3Jrc1xyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcblxyXG5jb25zdCBBcnR3b3JrcyA9IENvbGxlY3Rpb24uZXh0ZW5kKHtcclxuICAgIG1vZGVsOiBBcnR3b3JrLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucmlqa3NtdXNldW0ubmwvYXBpL25sL2NvbGxlY3Rpb24/a2V5PScgKyBTdG9yYWdlLmdldEFjY2Vzc1Rva2VuKCkgKyAnJmZvcm1hdD1qc29uJnR5cGU9c2NoaWxkZXJpaiZmLm5vcm1hbGl6ZWQzMkNvbG9ycy5oZXg9JTIwJTIzMzY3NjE0JmltZ29ubHk9dHJ1ZScsXHJcblxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmFydE9iamVjdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJ0T2JqZWN0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydHdvcmtzO1xyXG5cclxuXHJcbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _Expedition = require('../models/Expedition');

var _Expedition2 = _interopRequireDefault(_Expedition);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * collection of expeditions
 *
 * @constructor
 */

var Expeditions = _backbone.Collection.extend({
    model: _Expedition2.default,

    url: function url() {
        return 'https://www.rijksmuseum.nl/api/nl/agenda/2017-06-23?key=' + _config2.default.getAccessToken() + '&format=json';
    },

    parse: function parse(data) {

        if (data.options) {
            return data.options;
        } else {
            return data;
        }
    }
}); /**
     * Created by Gebruiker on 23-6-2017.
     */
exports.default = Expeditions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9ucy9FeHBlZGl0aW9ucy5qcyJdLCJuYW1lcyI6WyJFeHBlZGl0aW9ucyIsImV4dGVuZCIsIm1vZGVsIiwidXJsIiwiZ2V0QWNjZXNzVG9rZW4iLCJwYXJzZSIsImRhdGEiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsY0FBYyxxQkFBV0MsTUFBWCxDQUFrQjtBQUNsQ0MsK0JBRGtDOztBQUdsQ0MsU0FBSSxlQUFZO0FBQ1osZUFBTyw2REFBNEQsaUJBQVFDLGNBQVIsRUFBNUQsR0FBdUYsY0FBOUY7QUFDSCxLQUxpQzs7QUFPbENDLFdBQU8sZUFBVUMsSUFBVixFQUFnQjs7QUFFbkIsWUFBSUEsS0FBS0MsT0FBVCxFQUFrQjtBQUNkLG1CQUFPRCxLQUFLQyxPQUFaO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsbUJBQU9ELElBQVA7QUFDSDtBQUNKO0FBZmlDLENBQWxCLENBQXBCLEMsQ0FiQTs7O2tCQStCZU4sVyIsImZpbGUiOiJFeHBlZGl0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEdlYnJ1aWtlciBvbiAyMy02LTIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge0NvbGxlY3Rpb259IGZyb20gJ2JhY2tib25lJztcclxuaW1wb3J0IEV4cGVkaXRpb24gZnJvbSAnLi4vbW9kZWxzL0V4cGVkaXRpb24nO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIGNvbGxlY3Rpb24gb2YgZXhwZWRpdGlvbnNcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuY29uc3QgRXhwZWRpdGlvbnMgPSBDb2xsZWN0aW9uLmV4dGVuZCh7XHJcbiAgICBtb2RlbDogRXhwZWRpdGlvbixcclxuXHJcbiAgICB1cmw6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly93d3cucmlqa3NtdXNldW0ubmwvYXBpL25sL2FnZW5kYS8yMDE3LTA2LTIzP2tleT0nKyBTdG9yYWdlLmdldEFjY2Vzc1Rva2VuKCkgKyAnJmZvcm1hdD1qc29uJztcclxuICAgIH0sXHJcblxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEub3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVkaXRpb25zO1xyXG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _Painter = require('../models/Painter');

var _Painter2 = _interopRequireDefault(_Painter);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _backbone2 = require('backbone.paginator');

var _backbone3 = _interopRequireDefault(_backbone2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * collection of painters
 * @desc Uses PageableCollection to track the pagination.
 * @constructor
 */

/**
 * Created by Gebruiker on 20-6-2017.
 */
var Painters = _backbone3.default.extend({

    model: _Painter2.default,
    url: 'https://www.rijksmuseum.nl/api/nl/collection?key=' + _config2.default.getAccessToken() + '&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614&imgonly=true',

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
        totalRecords: 101
    },

    /**
     * @desc Override the parse function. First, to save the total records from the data.
     * The backbone.paginator requires this to determine how many pages there are in total.
     * Second, to only fill the models with artObject. this is the data we need to use from the api
     *
     * @param data
     * */

    parse: function parse(data) {
        this.state.totalRecords = data.count;
        if (data.artObjects) {
            return data.artObjects;
        } else {
            return data;
        }
    }
});

exports.default = Painters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9ucy9QYWludGVycy5qcyJdLCJuYW1lcyI6WyJQYWludGVycyIsImV4dGVuZCIsIm1vZGVsIiwidXJsIiwiZ2V0QWNjZXNzVG9rZW4iLCJxdWVyeVBhcmFtcyIsImN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzdGF0ZSIsImZpcnN0UGFnZSIsInRvdGFsUmVjb3JkcyIsInBhcnNlIiwiZGF0YSIsImNvdW50IiwiYXJ0T2JqZWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBUkE7OztBQWNBLElBQU1BLFdBQVcsbUJBQW1CQyxNQUFuQixDQUEwQjs7QUFFdkNDLDRCQUZ1QztBQUd2Q0MsU0FBSyxzREFBc0QsaUJBQVFDLGNBQVIsRUFBdEQsR0FBaUYsaUZBSC9DOztBQUt2Qzs7Ozs7QUFLQUMsaUJBQWE7QUFDVEMscUJBQWEsR0FESjtBQUVUQyxrQkFBVTtBQUZELEtBVjBCOztBQWV2Qzs7OztBQUlBQyxXQUFPO0FBQ0hDLG1CQUFXLENBRFI7QUFFSEYsa0JBQVUsR0FGUDtBQUdIRyxzQkFBYztBQUhYLEtBbkJnQzs7QUF5QnZDOzs7Ozs7OztBQVFBQyxXQUFPLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkIsYUFBS0osS0FBTCxDQUFXRSxZQUFYLEdBQTBCRSxLQUFLQyxLQUEvQjtBQUNBLFlBQUlELEtBQUtFLFVBQVQsRUFBcUI7QUFDakIsbUJBQU9GLEtBQUtFLFVBQVo7QUFDSCxTQUZELE1BRU87QUFDSCxtQkFBT0YsSUFBUDtBQUNIO0FBQ0o7QUF4Q3NDLENBQTFCLENBQWpCOztrQkEyQ2VaLFEiLCJmaWxlIjoiUGFpbnRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBHZWJydWlrZXIgb24gMjAtNi0yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tICdiYWNrYm9uZSc7XHJcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL21vZGVscy9QYWludGVyJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IFBhZ2VhYmxlQ29sbGVjdGlvbiBmcm9tICdiYWNrYm9uZS5wYWdpbmF0b3InO1xyXG5cclxuLyoqXHJcbiAqIGNvbGxlY3Rpb24gb2YgcGFpbnRlcnNcclxuICogQGRlc2MgVXNlcyBQYWdlYWJsZUNvbGxlY3Rpb24gdG8gdHJhY2sgdGhlIHBhZ2luYXRpb24uXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuXHJcbmNvbnN0IFBhaW50ZXJzID0gUGFnZWFibGVDb2xsZWN0aW9uLmV4dGVuZCh7XHJcblxyXG4gICAgbW9kZWw6IFBhaW50ZXIsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5yaWprc211c2V1bS5ubC9hcGkvbmwvY29sbGVjdGlvbj9rZXk9JyArIFN0b3JhZ2UuZ2V0QWNjZXNzVG9rZW4oKSArICcmZm9ybWF0PWpzb24mdHlwZT1zY2hpbGRlcmlqJmYubm9ybWFsaXplZDMyQ29sb3JzLmhleD0lMjAlMjMzNjc2MTQmaW1nb25seT10cnVlJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIHNldCBxdWVyeXBhcmFtdGVycy4gU2V0IHRoZSBkZWZhdWx0IHF1ZXJpZXMgcGFyYW1ldGVycywgZnJvbSBiYWNrYm9uZS5wYWdpbmF0b3IsIHRvIHRoZSBwYXJhbXRlcnMgdGhhdCB0aGUgcmlqa3NtdXNldW0gQVBJIHVuZGVyc3RhbmRzLlxyXG4gICAgICpcclxuICAgICAqICovXHJcblxyXG4gICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogXCJwXCIsXHJcbiAgICAgICAgcGFnZVNpemU6IFwicHNcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIHNldCBzdGF0ZSBmb3IgYmFja2JvbmUucGFnaW5hdG9yXHJcbiAgICAgKiAqL1xyXG5cclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgZmlyc3RQYWdlOiAxLFxyXG4gICAgICAgIHBhZ2VTaXplOiAxMDAsXHJcbiAgICAgICAgdG90YWxSZWNvcmRzOiAxMDEsXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgT3ZlcnJpZGUgdGhlIHBhcnNlIGZ1bmN0aW9uLiBGaXJzdCwgdG8gc2F2ZSB0aGUgdG90YWwgcmVjb3JkcyBmcm9tIHRoZSBkYXRhLlxyXG4gICAgICogVGhlIGJhY2tib25lLnBhZ2luYXRvciByZXF1aXJlcyB0aGlzIHRvIGRldGVybWluZSBob3cgbWFueSBwYWdlcyB0aGVyZSBhcmUgaW4gdG90YWwuXHJcbiAgICAgKiBTZWNvbmQsIHRvIG9ubHkgZmlsbCB0aGUgbW9kZWxzIHdpdGggYXJ0T2JqZWN0LiB0aGlzIGlzIHRoZSBkYXRhIHdlIG5lZWQgdG8gdXNlIGZyb20gdGhlIGFwaVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiAqL1xyXG5cclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudG90YWxSZWNvcmRzID0gZGF0YS5jb3VudDtcclxuICAgICAgICBpZiAoZGF0YS5hcnRPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmFydE9iamVjdHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFpbnRlcnM7XHJcblxyXG4iXX0=
'use strict';

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _backbone = require('backbone');

var _Artworks = require('./collections/Artworks');

var _Artworks2 = _interopRequireDefault(_Artworks);

var _Painters = require('./collections/Painters');

var _Painters2 = _interopRequireDefault(_Painters);

var _Expeditions = require('./collections/Expeditions');

var _Expeditions2 = _interopRequireDefault(_Expeditions);

var _CollectionOverview = require('./views/CollectionOverview');

var _CollectionOverview2 = _interopRequireDefault(_CollectionOverview);

var _ArtworkDetail = require('./views/ArtworkDetail');

var _ArtworkDetail2 = _interopRequireDefault(_ArtworkDetail);

var _PainterSelector = require('./views/PainterSelector');

var _PainterSelector2 = _interopRequireDefault(_PainterSelector);

var _LoadCollectionButton = require('./views/LoadCollectionButton');

var _LoadCollectionButton2 = _interopRequireDefault(_LoadCollectionButton);

var _ErrorView = require('./views/ErrorView');

var _ErrorView2 = _interopRequireDefault(_ErrorView);

var _ExpeditionsOverview = require('./views/ExpeditionsOverview');

var _ExpeditionsOverview2 = _interopRequireDefault(_ExpeditionsOverview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var setGlobalVariables = function setGlobalVariables() {
        window.App = {};
        App.events = _underscore2.default.clone(_backbone.Events);
    };

    /**
     * Run after dom is ready
     */
    var init = function init() {
        setGlobalVariables();
        //collections
        var artworksCollection = new _Artworks2.default();
        var paintersCollection = new _Painters2.default();
        var expeditionsCollection = new _Expeditions2.default(null, { date: '2017-06-23' });

        //views
        new _ErrorView2.default({ el: "#errorMessage" });
        new _LoadCollectionButton2.default({ el: "#LoadCollection" });
        new _CollectionOverview2.default({ el: "#ArtworksOverview", collection: artworksCollection });
        new _ArtworkDetail2.default({ el: "#ArtworkDetail" });
        new _PainterSelector2.default({ el: "#PainterSelector", collection: paintersCollection });
        new _ExpeditionsOverview2.default({ el: "#ExpeditionsOverview", collection: expeditionsCollection });

        Backbone.history.start({ pushState: true, root: '/0896910/ArtworksApp' });
    };

    window.addEventListener('load', init);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbInNldEdsb2JhbFZhcmlhYmxlcyIsIndpbmRvdyIsIkFwcCIsImV2ZW50cyIsImNsb25lIiwiaW5pdCIsImFydHdvcmtzQ29sbGVjdGlvbiIsInBhaW50ZXJzQ29sbGVjdGlvbiIsImV4cGVkaXRpb25zQ29sbGVjdGlvbiIsImRhdGUiLCJlbCIsImNvbGxlY3Rpb24iLCJCYWNrYm9uZSIsImhpc3RvcnkiLCJzdGFydCIsInB1c2hTdGF0ZSIsInJvb3QiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxDQUFDLFlBQVk7QUFDVCxRQUFJQSxxQkFBcUIsU0FBckJBLGtCQUFxQixHQUFZO0FBQ2pDQyxlQUFPQyxHQUFQLEdBQWEsRUFBYjtBQUNBQSxZQUFJQyxNQUFKLEdBQWEscUJBQUVDLEtBQUYsa0JBQWI7QUFDSCxLQUhEOztBQUtBOzs7QUFHQSxRQUFJQyxPQUFPLFNBQVBBLElBQU8sR0FBWTtBQUNuQkw7QUFDQTtBQUNBLFlBQUlNLHFCQUFxQix3QkFBekI7QUFDQSxZQUFJQyxxQkFBc0Isd0JBQTFCO0FBQ0EsWUFBSUMsd0JBQXdCLDBCQUFnQixJQUFoQixFQUFzQixFQUFFQyxNQUFNLFlBQVIsRUFBdEIsQ0FBNUI7O0FBRUE7QUFDQSxnQ0FBYyxFQUFDQyxJQUFJLGVBQUwsRUFBZDtBQUNBLDJDQUF5QixFQUFDQSxJQUFJLGlCQUFMLEVBQXpCO0FBQ0EseUNBQXVCLEVBQUNBLElBQUksbUJBQUwsRUFBMEJDLFlBQVlMLGtCQUF0QyxFQUF2QjtBQUNBLG9DQUFrQixFQUFDSSxJQUFJLGdCQUFMLEVBQWxCO0FBQ0Esc0NBQXFCLEVBQUNBLElBQUksa0JBQUwsRUFBeUJDLFlBQVlKLGtCQUFyQyxFQUFyQjtBQUNBLDBDQUF5QixFQUFDRyxJQUFJLHNCQUFMLEVBQTZCQyxZQUFZSCxxQkFBekMsRUFBekI7O0FBRUFJLGlCQUFTQyxPQUFULENBQWlCQyxLQUFqQixDQUF1QixFQUFDQyxXQUFXLElBQVosRUFBa0JDLE1BQU0sc0JBQXhCLEVBQXZCO0FBRUgsS0FqQkQ7O0FBbUJBZixXQUFPZ0IsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NaLElBQWhDO0FBQ0gsQ0E3QkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSAnYmFja2JvbmUnO1xyXG5pbXBvcnQgQXJ0d29ya3MgZnJvbSAnLi9jb2xsZWN0aW9ucy9BcnR3b3Jrcyc7XHJcbmltcG9ydCBQYWludGVycyBmcm9tICcuL2NvbGxlY3Rpb25zL1BhaW50ZXJzJztcclxuaW1wb3J0IEV4cGVkaXRpb25zIGZyb20gJy4vY29sbGVjdGlvbnMvRXhwZWRpdGlvbnMnO1xyXG5pbXBvcnQgQ29sbGVjdGlvbk92ZXJ2aWV3IGZyb20gJy4vdmlld3MvQ29sbGVjdGlvbk92ZXJ2aWV3JztcclxuaW1wb3J0IEFydHdvcmtEZXRhaWwgZnJvbSAnLi92aWV3cy9BcnR3b3JrRGV0YWlsJztcclxuaW1wb3J0IFBhaW50ZXJTZWxlY3RvciBmcm9tICcuL3ZpZXdzL1BhaW50ZXJTZWxlY3Rvcic7XHJcbmltcG9ydCBMb2FkQ29sbGVjdGlvbkJ1dHRvbiBmcm9tICcuL3ZpZXdzL0xvYWRDb2xsZWN0aW9uQnV0dG9uJztcclxuaW1wb3J0IEVycm9yVmlldyBmcm9tICcuL3ZpZXdzL0Vycm9yVmlldyc7XHJcbmltcG9ydCBFeHBlZGl0aW9uc092ZXJ2aWV3IGZyb20gJy4vdmlld3MvRXhwZWRpdGlvbnNPdmVydmlldyc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNldEdsb2JhbFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cuQXBwID0ge307XHJcbiAgICAgICAgQXBwLmV2ZW50cyA9IF8uY2xvbmUoRXZlbnRzKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW4gYWZ0ZXIgZG9tIGlzIHJlYWR5XHJcbiAgICAgKi9cclxuICAgIGxldCBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldEdsb2JhbFZhcmlhYmxlcygpO1xyXG4gICAgICAgIC8vY29sbGVjdGlvbnNcclxuICAgICAgICBsZXQgYXJ0d29ya3NDb2xsZWN0aW9uID0gbmV3IEFydHdvcmtzKCk7XHJcbiAgICAgICAgbGV0IHBhaW50ZXJzQ29sbGVjdGlvbiAgPSBuZXcgUGFpbnRlcnMoKTtcclxuICAgICAgICBsZXQgZXhwZWRpdGlvbnNDb2xsZWN0aW9uID0gbmV3IEV4cGVkaXRpb25zKG51bGwsIHsgZGF0ZTogJzIwMTctMDYtMjMnIH0pO1xyXG5cclxuICAgICAgICAvL3ZpZXdzXHJcbiAgICAgICAgbmV3IEVycm9yVmlldyh7ZWw6IFwiI2Vycm9yTWVzc2FnZVwifSk7XHJcbiAgICAgICAgbmV3IExvYWRDb2xsZWN0aW9uQnV0dG9uKHtlbDogXCIjTG9hZENvbGxlY3Rpb25cIn0pO1xyXG4gICAgICAgIG5ldyBDb2xsZWN0aW9uT3ZlcnZpZXcoe2VsOiBcIiNBcnR3b3Jrc092ZXJ2aWV3XCIsIGNvbGxlY3Rpb246IGFydHdvcmtzQ29sbGVjdGlvbn0pO1xyXG4gICAgICAgIG5ldyBBcnR3b3JrRGV0YWlsKHtlbDogXCIjQXJ0d29ya0RldGFpbFwifSk7XHJcbiAgICAgICAgbmV3IFBhaW50ZXJTZWxlY3RvciAoe2VsOiBcIiNQYWludGVyU2VsZWN0b3JcIiwgY29sbGVjdGlvbjogcGFpbnRlcnNDb2xsZWN0aW9ufSk7XHJcbiAgICAgICAgbmV3IEV4cGVkaXRpb25zT3ZlcnZpZXcgKHtlbDogXCIjRXhwZWRpdGlvbnNPdmVydmlld1wiLCBjb2xsZWN0aW9uOiBleHBlZGl0aW9uc0NvbGxlY3Rpb259KTtcclxuXHJcbiAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCh7cHVzaFN0YXRlOiB0cnVlLCByb290OiAnLzA4OTY5MTAvQXJ0d29ya3NBcHAnfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpO1xyXG59KSgpO1xyXG5cclxuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @desc model for every Artwork in the collection
 *
 * @constructor
 */
var Artwork = _backbone.Model.extend({

    url: function url() {
        return "https://www.rijksmuseum.nl/api/nl/collection/" + this.get('id') + "?key=" + _config2.default.getAccessToken() + "&format=json";
    },

    /**
     * @desc Parse to fill the model only with artObject
     *
     * @param data
     * */

    parse: function parse(data) {

        if (data.artObject) {
            return data.artObject;
        } else {
            return data;
        }
    }
});

exports.default = Artwork;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvQXJ0d29yay5qcyJdLCJuYW1lcyI6WyJBcnR3b3JrIiwiZXh0ZW5kIiwidXJsIiwiZ2V0IiwiZ2V0QWNjZXNzVG9rZW4iLCJwYXJzZSIsImRhdGEiLCJhcnRPYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFNQSxVQUFVLGdCQUFNQyxNQUFOLENBQWE7O0FBRXpCQyxTQUFLLGVBQVk7QUFDYixlQUFPLGtEQUFrRCxLQUFLQyxHQUFMLENBQVMsSUFBVCxDQUFsRCxHQUFtRSxPQUFuRSxHQUE2RSxpQkFBUUMsY0FBUixFQUE3RSxHQUF3RyxjQUEvRztBQUNILEtBSndCOztBQU16Qjs7Ozs7O0FBTUFDLFdBQU8sZUFBVUMsSUFBVixFQUFnQjs7QUFFbkIsWUFBSUEsS0FBS0MsU0FBVCxFQUFvQjtBQUNoQixtQkFBT0QsS0FBS0MsU0FBWjtBQUNILFNBRkQsTUFHSztBQUNELG1CQUFPRCxJQUFQO0FBQ0g7QUFDSjtBQXBCd0IsQ0FBYixDQUFoQjs7a0JBdUJlTixPIiwiZmlsZSI6IkFydHdvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tICdiYWNrYm9uZSc7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG4vKipcclxuICogQGRlc2MgbW9kZWwgZm9yIGV2ZXJ5IEFydHdvcmsgaW4gdGhlIGNvbGxlY3Rpb25cclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5jb25zdCBBcnR3b3JrID0gTW9kZWwuZXh0ZW5kKHtcclxuXHJcbiAgICB1cmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJodHRwczovL3d3dy5yaWprc211c2V1bS5ubC9hcGkvbmwvY29sbGVjdGlvbi9cIiArIHRoaXMuZ2V0KCdpZCcpICsgXCI/a2V5PVwiICsgU3RvcmFnZS5nZXRBY2Nlc3NUb2tlbigpICsgXCImZm9ybWF0PWpzb25cIlxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFBhcnNlIHRvIGZpbGwgdGhlIG1vZGVsIG9ubHkgd2l0aCBhcnRPYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogKi9cclxuXHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuYXJ0T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmFydE9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydHdvcms7XHJcbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

/**
 * @desc model for every Expedition in the collection
 *
 * @constructor
 */
var Expedition = _backbone.Model.extend({}); /**
                                              * Created by Gebruiker on 23-6-2017.
                                              */
exports.default = Expedition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvRXhwZWRpdGlvbi5qcyJdLCJuYW1lcyI6WyJFeHBlZGl0aW9uIiwiZXh0ZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTs7QUFFQTs7Ozs7QUFLQSxJQUFNQSxhQUFhLGdCQUFNQyxNQUFOLENBQWEsRUFBYixDQUFuQixDLENBVkE7OztrQkFZZUQsVSIsImZpbGUiOiJFeHBlZGl0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgR2VicnVpa2VyIG9uIDIzLTYtMjAxNy5cclxuICovXHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJ2JhY2tib25lJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBtb2RlbCBmb3IgZXZlcnkgRXhwZWRpdGlvbiBpbiB0aGUgY29sbGVjdGlvblxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmNvbnN0IEV4cGVkaXRpb24gPSBNb2RlbC5leHRlbmQoe30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwZWRpdGlvbjtcclxuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

/**
 * Model for every Painter in the collection
 *
 * @constructor
 */

var Painter = _backbone.Model.extend({});

exports.default = Painter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvUGFpbnRlci5qcyJdLCJuYW1lcyI6WyJQYWludGVyIiwiZXh0ZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsVUFBVSxnQkFBTUMsTUFBTixDQUFhLEVBQWIsQ0FBaEI7O2tCQUVlRCxPIiwiZmlsZSI6IlBhaW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tICdiYWNrYm9uZSc7XHJcblxyXG4vKipcclxuICogTW9kZWwgZm9yIGV2ZXJ5IFBhaW50ZXIgaW4gdGhlIGNvbGxlY3Rpb25cclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuY29uc3QgUGFpbnRlciA9IE1vZGVsLmV4dGVuZCh7fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWludGVyO1xyXG4iXX0=
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require("backbone");

/**
 * Router for Artworks URL's
 *
 * @constructor
 */
var ArtworksRouter = _backbone.Router.extend({

    /**
     * @desc defined routes with callback
     */
    routes: {
        "": "index",
        "collection": "loadCollectionOverview",
        "collection/detail/:objectNumber": "loadDetailArtworkView",
        "painter/:painterName": "loadPainterOverview"
    },

    initialize: function initialize() {},

    /**
     * @desc Route callback, used to trigger global event.
     * @event global loadArtworksCollection
     */
    index: function index() {
        App.events.trigger("loadExpeditions");
    },

    loadCollectionOverview: function loadCollectionOverview() {
        App.events.trigger("loadArtworksCollection");
    },

    /**
     * @desc Route callback, used to trigger global event
     *
     * @param objectNumber
     */
    loadDetailArtworkView: function loadDetailArtworkView(objectNumber) {
        App.events.trigger("loadArtworkDetail", {
            objectNumber: objectNumber
        });
    },

    /**
     * @desc Route callback, used to trigger global event
     *
     * @param painter
     */
    loadPainterOverview: function loadPainterOverview(painter) {
        App.events.trigger("loadPainterCollectionOverview", {
            painter: painter
        });
    }
});

exports.default = ArtworksRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXJzL0FydHdvcmtzUm91dGVyLmpzIl0sIm5hbWVzIjpbIkFydHdvcmtzUm91dGVyIiwiZXh0ZW5kIiwicm91dGVzIiwiaW5pdGlhbGl6ZSIsImluZGV4IiwiQXBwIiwiZXZlbnRzIiwidHJpZ2dlciIsImxvYWRDb2xsZWN0aW9uT3ZlcnZpZXciLCJsb2FkRGV0YWlsQXJ0d29ya1ZpZXciLCJvYmplY3ROdW1iZXIiLCJsb2FkUGFpbnRlck92ZXJ2aWV3IiwicGFpbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7O0FBS0EsSUFBTUEsaUJBQWlCLGlCQUFPQyxNQUFQLENBQWM7O0FBRWpDOzs7QUFHQUMsWUFBUTtBQUNKLFlBQUksT0FEQTtBQUVKLHNCQUFjLHdCQUZWO0FBR0osMkNBQW1DLHVCQUgvQjtBQUlKLGdDQUF3QjtBQUpwQixLQUx5Qjs7QUFZakNDLGdCQUFZLHNCQUFZLENBRXZCLENBZGdDOztBQWdCakM7Ozs7QUFJQUMsV0FBTyxpQkFBWTtBQUNmQyxZQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsaUJBQW5CO0FBQ0gsS0F0QmdDOztBQXdCakNDLDRCQUF3QixrQ0FBWTtBQUNoQ0gsWUFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLHdCQUFuQjtBQUNILEtBMUJnQzs7QUE0QmpDOzs7OztBQUtBRSwyQkFBdUIsK0JBQVVDLFlBQVYsRUFBd0I7QUFDM0NMLFlBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixtQkFBbkIsRUFBd0M7QUFDcENHLDBCQUFjQTtBQURzQixTQUF4QztBQUdILEtBckNnQzs7QUF1Q2pDOzs7OztBQUtBQyx5QkFBcUIsNkJBQVVDLE9BQVYsRUFBbUI7QUFDcENQLFlBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQiwrQkFBbkIsRUFBb0Q7QUFDaERLLHFCQUFTQTtBQUR1QyxTQUFwRDtBQUdIO0FBaERnQyxDQUFkLENBQXZCOztrQkFtRGVaLGMiLCJmaWxlIjoiQXJ0d29ya3NSb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnYmFja2JvbmUnO1xyXG5cclxuLyoqXHJcbiAqIFJvdXRlciBmb3IgQXJ0d29ya3MgVVJMJ3NcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5jb25zdCBBcnR3b3Jrc1JvdXRlciA9IFJvdXRlci5leHRlbmQoe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgZGVmaW5lZCByb3V0ZXMgd2l0aCBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICByb3V0ZXM6IHtcclxuICAgICAgICBcIlwiOiBcImluZGV4XCIsXHJcbiAgICAgICAgXCJjb2xsZWN0aW9uXCI6IFwibG9hZENvbGxlY3Rpb25PdmVydmlld1wiLFxyXG4gICAgICAgIFwiY29sbGVjdGlvbi9kZXRhaWwvOm9iamVjdE51bWJlclwiOiBcImxvYWREZXRhaWxBcnR3b3JrVmlld1wiLFxyXG4gICAgICAgIFwicGFpbnRlci86cGFpbnRlck5hbWVcIjogXCJsb2FkUGFpbnRlck92ZXJ2aWV3XCJcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBSb3V0ZSBjYWxsYmFjaywgdXNlZCB0byB0cmlnZ2VyIGdsb2JhbCBldmVudC5cclxuICAgICAqIEBldmVudCBnbG9iYWwgbG9hZEFydHdvcmtzQ29sbGVjdGlvblxyXG4gICAgICovXHJcbiAgICBpbmRleDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImxvYWRFeHBlZGl0aW9uc1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZENvbGxlY3Rpb25PdmVydmlldzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImxvYWRBcnR3b3Jrc0NvbGxlY3Rpb25cIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgUm91dGUgY2FsbGJhY2ssIHVzZWQgdG8gdHJpZ2dlciBnbG9iYWwgZXZlbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0TnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGxvYWREZXRhaWxBcnR3b3JrVmlldzogZnVuY3Rpb24gKG9iamVjdE51bWJlcikge1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImxvYWRBcnR3b3JrRGV0YWlsXCIsIHtcclxuICAgICAgICAgICAgb2JqZWN0TnVtYmVyOiBvYmplY3ROdW1iZXJcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBSb3V0ZSBjYWxsYmFjaywgdXNlZCB0byB0cmlnZ2VyIGdsb2JhbCBldmVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYWludGVyXHJcbiAgICAgKi9cclxuICAgIGxvYWRQYWludGVyT3ZlcnZpZXc6IGZ1bmN0aW9uIChwYWludGVyKSB7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwibG9hZFBhaW50ZXJDb2xsZWN0aW9uT3ZlcnZpZXdcIiwge1xyXG4gICAgICAgICAgICBwYWludGVyOiBwYWludGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0d29ya3NSb3V0ZXI7XHJcblxyXG5cclxuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _ArtworksRouter = require('../routers/ArtworksRouter');

var _ArtworksRouter2 = _interopRequireDefault(_ArtworksRouter);

var _Artwork = require('../models/Artwork');

var _Artwork2 = _interopRequireDefault(_Artwork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Gebruiker on 20-6-2017.
 */
/**
 * Created by Gebruiker on 14-6-2017.
 */
var ArtworkDetail = _backbone.View.extend({
    router: null,
    templateCollectionOverview: '',

    /**
     * @desc initialize
     * bind event to view
     * initialize router
     *
     */
    initialize: function initialize() {
        App.events.on('loadArtworkDetail', this.loadDetailArtwork, this);
        this.router = new _ArtworksRouter2.default();
        this.templateArtworkDetail = _underscore2.default.template(this.$('#template-artworkDetail').html());
    },

    /**
     * @desc Wrapper function to load the artwork details through the model
     * Through model because it is not a collection but one artwork.
     * @param data
     */
    loadDetailArtwork: function loadDetailArtwork(data) {
        var _this = this;

        var detailArtwork = new _Artwork2.default({ id: data.objectNumber });
        detailArtwork.fetch({
            success: function success(model) {
                return _this.successLoadArtworkDetail(model);
            },
            error: function error(model, response) {
                return _this.errorLoadArtworkDetail(model, response);
            }
        });
    },

    /**
     * @desc Success Handler will add HTML of artwork to this $el
     *
     * @param model
     */
    successLoadArtworkDetail: function successLoadArtworkDetail(model) {
        this.$el.html(this.templateArtworkDetail({ artworkDetail: model }));
    },

    /**
     * @desc On error, trigger global event
     *
     * @param model
     * @param response
     */
    errorLoadArtworkDetail: function errorLoadArtworkDetail(model, response) {
        App.events.trigger('errorView', {
            message: response.responseJSON.error
        });
    }

});

exports.default = ArtworkDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3cy9BcnR3b3JrRGV0YWlsLmpzIl0sIm5hbWVzIjpbIkFydHdvcmtEZXRhaWwiLCJleHRlbmQiLCJyb3V0ZXIiLCJ0ZW1wbGF0ZUNvbGxlY3Rpb25PdmVydmlldyIsImluaXRpYWxpemUiLCJBcHAiLCJldmVudHMiLCJvbiIsImxvYWREZXRhaWxBcnR3b3JrIiwidGVtcGxhdGVBcnR3b3JrRGV0YWlsIiwidGVtcGxhdGUiLCIkIiwiaHRtbCIsImRhdGEiLCJkZXRhaWxBcnR3b3JrIiwiaWQiLCJvYmplY3ROdW1iZXIiLCJmZXRjaCIsInN1Y2Nlc3MiLCJtb2RlbCIsInN1Y2Nlc3NMb2FkQXJ0d29ya0RldGFpbCIsImVycm9yIiwicmVzcG9uc2UiLCJlcnJvckxvYWRBcnR3b3JrRGV0YWlsIiwiJGVsIiwiYXJ0d29ya0RldGFpbCIsInRyaWdnZXIiLCJtZXNzYWdlIiwicmVzcG9uc2VKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQVRBOzs7QUFHQTs7O0FBU0EsSUFBTUEsZ0JBQWdCLGVBQUtDLE1BQUwsQ0FBWTtBQUM5QkMsWUFBUSxJQURzQjtBQUU5QkMsZ0NBQTRCLEVBRkU7O0FBSTlCOzs7Ozs7QUFNQUMsZ0JBQVksc0JBQVk7QUFDcEJDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLG1CQUFkLEVBQW1DLEtBQUtDLGlCQUF4QyxFQUEyRCxJQUEzRDtBQUNBLGFBQUtOLE1BQUwsR0FBYyw4QkFBZDtBQUNBLGFBQUtPLHFCQUFMLEdBQTZCLHFCQUFFQyxRQUFGLENBQVcsS0FBS0MsQ0FBTCxDQUFPLHlCQUFQLEVBQWtDQyxJQUFsQyxFQUFYLENBQTdCO0FBQ0gsS0FkNkI7O0FBZ0I5Qjs7Ozs7QUFLQUosdUJBQW1CLDJCQUFVSyxJQUFWLEVBQWdCO0FBQUE7O0FBQy9CLFlBQUlDLGdCQUFnQixzQkFBWSxFQUFDQyxJQUFJRixLQUFLRyxZQUFWLEVBQVosQ0FBcEI7QUFDQUYsc0JBQWNHLEtBQWQsQ0FBb0I7QUFDaEJDLHFCQUFTLGlCQUFDQyxLQUFEO0FBQUEsdUJBQVcsTUFBS0Msd0JBQUwsQ0FBOEJELEtBQTlCLENBQVg7QUFBQSxhQURPO0FBRWhCRSxtQkFBTyxlQUFDRixLQUFELEVBQVFHLFFBQVI7QUFBQSx1QkFBcUIsTUFBS0Msc0JBQUwsQ0FBNEJKLEtBQTVCLEVBQW1DRyxRQUFuQyxDQUFyQjtBQUFBO0FBRlMsU0FBcEI7QUFJSCxLQTNCNkI7O0FBNkI5Qjs7Ozs7QUFLQUYsOEJBQTBCLGtDQUFVRCxLQUFWLEVBQWlCO0FBQ3ZDLGFBQUtLLEdBQUwsQ0FBU1osSUFBVCxDQUFjLEtBQUtILHFCQUFMLENBQTJCLEVBQUNnQixlQUFlTixLQUFoQixFQUEzQixDQUFkO0FBQ0gsS0FwQzZCOztBQXNDOUI7Ozs7OztBQU1BSSw0QkFBd0IsZ0NBQVVKLEtBQVYsRUFBaUJHLFFBQWpCLEVBQTJCO0FBQy9DakIsWUFBSUMsTUFBSixDQUFXb0IsT0FBWCxDQUFtQixXQUFuQixFQUFnQztBQUM1QkMscUJBQVNMLFNBQVNNLFlBQVQsQ0FBc0JQO0FBREgsU0FBaEM7QUFHSDs7QUFoRDZCLENBQVosQ0FBdEI7O2tCQW9EZXJCLGEiLCJmaWxlIjoiQXJ0d29ya0RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEdlYnJ1aWtlciBvbiAyMC02LTIwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBHZWJydWlrZXIgb24gMTQtNi0yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtWaWV3fSBmcm9tICdiYWNrYm9uZSc7XHJcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgQXJ0d29ya3NSb3V0ZXIgZnJvbSAnLi4vcm91dGVycy9BcnR3b3Jrc1JvdXRlcic7XHJcbmltcG9ydCBBcnR3b3JrIGZyb20gJy4uL21vZGVscy9BcnR3b3JrJ1xyXG5cclxuXHJcbmNvbnN0IEFydHdvcmtEZXRhaWwgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICByb3V0ZXI6IG51bGwsXHJcbiAgICB0ZW1wbGF0ZUNvbGxlY3Rpb25PdmVydmlldzogJycsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBpbml0aWFsaXplXHJcbiAgICAgKiBiaW5kIGV2ZW50IHRvIHZpZXdcclxuICAgICAqIGluaXRpYWxpemUgcm91dGVyXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbignbG9hZEFydHdvcmtEZXRhaWwnLCB0aGlzLmxvYWREZXRhaWxBcnR3b3JrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBBcnR3b3Jrc1JvdXRlcigpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVBcnR3b3JrRGV0YWlsID0gXy50ZW1wbGF0ZSh0aGlzLiQoJyN0ZW1wbGF0ZS1hcnR3b3JrRGV0YWlsJykuaHRtbCgpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGxvYWQgdGhlIGFydHdvcmsgZGV0YWlscyB0aHJvdWdoIHRoZSBtb2RlbFxyXG4gICAgICogVGhyb3VnaCBtb2RlbCBiZWNhdXNlIGl0IGlzIG5vdCBhIGNvbGxlY3Rpb24gYnV0IG9uZSBhcnR3b3JrLlxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgbG9hZERldGFpbEFydHdvcms6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGRldGFpbEFydHdvcmsgPSBuZXcgQXJ0d29yayh7aWQ6IGRhdGEub2JqZWN0TnVtYmVyfSk7XHJcbiAgICAgICAgZGV0YWlsQXJ0d29yay5mZXRjaCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChtb2RlbCkgPT4gdGhpcy5zdWNjZXNzTG9hZEFydHdvcmtEZXRhaWwobW9kZWwpLFxyXG4gICAgICAgICAgICBlcnJvcjogKG1vZGVsLCByZXNwb25zZSkgPT4gdGhpcy5lcnJvckxvYWRBcnR3b3JrRGV0YWlsKG1vZGVsLCByZXNwb25zZSlcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBTdWNjZXNzIEhhbmRsZXIgd2lsbCBhZGQgSFRNTCBvZiBhcnR3b3JrIHRvIHRoaXMgJGVsXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1vZGVsXHJcbiAgICAgKi9cclxuICAgIHN1Y2Nlc3NMb2FkQXJ0d29ya0RldGFpbDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlQXJ0d29ya0RldGFpbCh7YXJ0d29ya0RldGFpbDogbW9kZWx9KSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgT24gZXJyb3IsIHRyaWdnZXIgZ2xvYmFsIGV2ZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgZXJyb3JMb2FkQXJ0d29ya0RldGFpbDogZnVuY3Rpb24gKG1vZGVsLCByZXNwb25zZSkge1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcignZXJyb3JWaWV3Jywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5yZXNwb25zZUpTT04uZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0d29ya0RldGFpbDsiXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _ArtworksRouter = require('../routers/ArtworksRouter');

var _ArtworksRouter2 = _interopRequireDefault(_ArtworksRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollectionOverview = _backbone.View.extend({
    router: null,
    templateCollectionOverview: '',

    events: {
        "click a": "triggerDetailView"
    },

    initialize: function initialize() {
        App.events.on('loadArtworksCollection', this.loadArtworks, this);
        App.events.on('loadPainterCollectionOverview', this.loadArtworksPainter, this);
        this.router = new _ArtworksRouter2.default();
        this.templateCollectionOverview = _underscore2.default.template(this.$('#template-artworksOverview').html());
    },

    /**
     *@desc Wrapper function to load the Artworks through the collection
     *
     */
    loadArtworks: function loadArtworks() {
        var _this = this;

        this.collection.fetch({
            success: function success(collection) {
                return _this.successLoadArtworks(collection);
            },
            error: function error(collection, response) {
                return _this.errorLoadArtworksCollection(collection, response);
            }
        });
    },

    /**
     * @desc wrapper function to load artwoks from specific painterin overview
     *
     * @param data
     */
    loadArtworksPainter: function loadArtworksPainter(data) {
        var _this2 = this;

        this.collection.fetch({ data: { q: data.painter },
            success: function success(collection) {
                return _this2.successLoadArtworks(collection);
            },
            error: function error(collection, response) {
                return _this2.errorLoadArtworksCollection(collection, response);
            }
        });
    },
    /**
     * Success Handler will add HTML of artworks to this $el
     *
     * @param collection
     */
    successLoadArtworks: function successLoadArtworks(collection) {
        this.$el.html(this.templateCollectionOverview({ artworks: this.collection.models }));
    },

    /**
     * @desc Error handler, trigger global event
     *
     * @param collection
     * @param response
     */
    errorLoadArtworksCollection: function errorLoadArtworksCollection(collection, response) {
        App.events.trigger('errorView', {
            message: response.responseJSON.error
        });
    },

    /**
     * Click handler, retrieve data from target attributes and navigate router.
     *
     * @param e
     */
    triggerDetailView: function triggerDetailView(e) {
        e.preventDefault();

        //Get target the retrieve data properties
        var target = e.currentTarget;
        var url = 'collection/detail/' + target.dataset['objectnumber'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, { trigger: true, replace: true });
    }

}); /**
     * Created by Gebruiker on 14-6-2017.
     */
exports.default = CollectionOverview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3cy9Db2xsZWN0aW9uT3ZlcnZpZXcuanMiXSwibmFtZXMiOlsiQ29sbGVjdGlvbk92ZXJ2aWV3IiwiZXh0ZW5kIiwicm91dGVyIiwidGVtcGxhdGVDb2xsZWN0aW9uT3ZlcnZpZXciLCJldmVudHMiLCJpbml0aWFsaXplIiwiQXBwIiwib24iLCJsb2FkQXJ0d29ya3MiLCJsb2FkQXJ0d29ya3NQYWludGVyIiwidGVtcGxhdGUiLCIkIiwiaHRtbCIsImNvbGxlY3Rpb24iLCJmZXRjaCIsInN1Y2Nlc3MiLCJzdWNjZXNzTG9hZEFydHdvcmtzIiwiZXJyb3IiLCJyZXNwb25zZSIsImVycm9yTG9hZEFydHdvcmtzQ29sbGVjdGlvbiIsImRhdGEiLCJxIiwicGFpbnRlciIsIiRlbCIsImFydHdvcmtzIiwibW9kZWxzIiwidHJpZ2dlciIsIm1lc3NhZ2UiLCJyZXNwb25zZUpTT04iLCJ0cmlnZ2VyRGV0YWlsVmlldyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ1cmwiLCJkYXRhc2V0IiwibmF2aWdhdGUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsZUFBS0MsTUFBTCxDQUFZO0FBQ25DQyxZQUFRLElBRDJCO0FBRW5DQyxnQ0FBNEIsRUFGTzs7QUFJbkNDLFlBQVE7QUFDSixtQkFBVztBQURQLEtBSjJCOztBQVFuQ0MsZ0JBQVksc0JBQVk7QUFDcEJDLFlBQUlGLE1BQUosQ0FBV0csRUFBWCxDQUFjLHdCQUFkLEVBQXdDLEtBQUtDLFlBQTdDLEVBQTJELElBQTNEO0FBQ0FGLFlBQUlGLE1BQUosQ0FBV0csRUFBWCxDQUFjLCtCQUFkLEVBQStDLEtBQUtFLG1CQUFwRCxFQUF5RSxJQUF6RTtBQUNBLGFBQUtQLE1BQUwsR0FBYyw4QkFBZDtBQUNBLGFBQUtDLDBCQUFMLEdBQWtDLHFCQUFFTyxRQUFGLENBQVcsS0FBS0MsQ0FBTCxDQUFPLDRCQUFQLEVBQXFDQyxJQUFyQyxFQUFYLENBQWxDO0FBQ0gsS0Fia0M7O0FBZW5DOzs7O0FBSUFKLGtCQUFjLHdCQUFZO0FBQUE7O0FBQ3RCLGFBQUtLLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCO0FBQ2xCQyxxQkFBUyxpQkFBQ0YsVUFBRDtBQUFBLHVCQUFnQixNQUFLRyxtQkFBTCxDQUF5QkgsVUFBekIsQ0FBaEI7QUFBQSxhQURTO0FBRWxCSSxtQkFBTyxlQUFDSixVQUFELEVBQWFLLFFBQWI7QUFBQSx1QkFBMEIsTUFBS0MsMkJBQUwsQ0FBaUNOLFVBQWpDLEVBQTZDSyxRQUE3QyxDQUExQjtBQUFBO0FBRlcsU0FBdEI7QUFJSCxLQXhCa0M7O0FBMEJuQzs7Ozs7QUFLQVQseUJBQXFCLDZCQUFVVyxJQUFWLEVBQWdCO0FBQUE7O0FBQ2pDLGFBQUtQLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLEVBQUNNLE1BQU0sRUFBQ0MsR0FBR0QsS0FBS0UsT0FBVCxFQUFQO0FBQ2xCUCxxQkFBUyxpQkFBQ0YsVUFBRDtBQUFBLHVCQUFnQixPQUFLRyxtQkFBTCxDQUF5QkgsVUFBekIsQ0FBaEI7QUFBQSxhQURTO0FBRWxCSSxtQkFBTyxlQUFDSixVQUFELEVBQWFLLFFBQWI7QUFBQSx1QkFBMEIsT0FBS0MsMkJBQUwsQ0FBaUNOLFVBQWpDLEVBQTZDSyxRQUE3QyxDQUExQjtBQUFBO0FBRlcsU0FBdEI7QUFJSCxLQXBDa0M7QUFxQ25DOzs7OztBQUtBRix5QkFBcUIsNkJBQVVILFVBQVYsRUFBc0I7QUFDdkMsYUFBS1UsR0FBTCxDQUFTWCxJQUFULENBQWMsS0FBS1QsMEJBQUwsQ0FBZ0MsRUFBQ3FCLFVBQVUsS0FBS1gsVUFBTCxDQUFnQlksTUFBM0IsRUFBaEMsQ0FBZDtBQUNILEtBNUNrQzs7QUE4Q25DOzs7Ozs7QUFNQU4saUNBQTZCLHFDQUFVTixVQUFWLEVBQXNCSyxRQUF0QixFQUFnQztBQUN6RFosWUFBSUYsTUFBSixDQUFXc0IsT0FBWCxDQUFtQixXQUFuQixFQUFnQztBQUM1QkMscUJBQVNULFNBQVNVLFlBQVQsQ0FBc0JYO0FBREgsU0FBaEM7QUFHSCxLQXhEa0M7O0FBMERuQzs7Ozs7QUFLQVksdUJBQW1CLDJCQUFVQyxDQUFWLEVBQWE7QUFDNUJBLFVBQUVDLGNBQUY7O0FBRUE7QUFDQSxZQUFJQyxTQUFTRixFQUFFRyxhQUFmO0FBQ0EsWUFBSUMsTUFBTSx1QkFBdUJGLE9BQU9HLE9BQVAsQ0FBZSxjQUFmLENBQWpDOztBQUVBO0FBQ0EsYUFBS2pDLE1BQUwsQ0FBWWtDLFFBQVosQ0FBcUJGLEdBQXJCLEVBQTBCLEVBQUNSLFNBQVMsSUFBVixFQUFnQlcsU0FBUyxJQUF6QixFQUExQjtBQUNIOztBQXhFa0MsQ0FBWixDQUEzQixDLENBUEE7OztrQkFtRmVyQyxrQiIsImZpbGUiOiJDb2xsZWN0aW9uT3ZlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBHZWJydWlrZXIgb24gMTQtNi0yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtWaWV3fSBmcm9tICdiYWNrYm9uZSc7XHJcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgQXJ0d29ya3NSb3V0ZXIgZnJvbSAnLi4vcm91dGVycy9BcnR3b3Jrc1JvdXRlcic7XHJcblxyXG5jb25zdCBDb2xsZWN0aW9uT3ZlcnZpZXcgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICByb3V0ZXI6IG51bGwsXHJcbiAgICB0ZW1wbGF0ZUNvbGxlY3Rpb25PdmVydmlldzogJycsXHJcblxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgXCJjbGljayBhXCI6IFwidHJpZ2dlckRldGFpbFZpZXdcIlxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbignbG9hZEFydHdvcmtzQ29sbGVjdGlvbicsIHRoaXMubG9hZEFydHdvcmtzLCB0aGlzKTtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKCdsb2FkUGFpbnRlckNvbGxlY3Rpb25PdmVydmlldycsIHRoaXMubG9hZEFydHdvcmtzUGFpbnRlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgQXJ0d29ya3NSb3V0ZXIoKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlQ29sbGVjdGlvbk92ZXJ2aWV3ID0gXy50ZW1wbGF0ZSh0aGlzLiQoJyN0ZW1wbGF0ZS1hcnR3b3Jrc092ZXJ2aWV3JykuaHRtbCgpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKkBkZXNjIFdyYXBwZXIgZnVuY3Rpb24gdG8gbG9hZCB0aGUgQXJ0d29ya3MgdGhyb3VnaCB0aGUgY29sbGVjdGlvblxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbG9hZEFydHdvcmtzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLmZldGNoKHtcclxuICAgICAgICAgICAgc3VjY2VzczogKGNvbGxlY3Rpb24pID0+IHRoaXMuc3VjY2Vzc0xvYWRBcnR3b3Jrcyhjb2xsZWN0aW9uKSxcclxuICAgICAgICAgICAgZXJyb3I6IChjb2xsZWN0aW9uLCByZXNwb25zZSkgPT4gdGhpcy5lcnJvckxvYWRBcnR3b3Jrc0NvbGxlY3Rpb24oY29sbGVjdGlvbiwgcmVzcG9uc2UpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2Mgd3JhcHBlciBmdW5jdGlvbiB0byBsb2FkIGFydHdva3MgZnJvbSBzcGVjaWZpYyBwYWludGVyaW4gb3ZlcnZpZXdcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICovXHJcbiAgICBsb2FkQXJ0d29ya3NQYWludGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5mZXRjaCh7ZGF0YToge3E6IGRhdGEucGFpbnRlcn0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChjb2xsZWN0aW9uKSA9PiB0aGlzLnN1Y2Nlc3NMb2FkQXJ0d29ya3MoY29sbGVjdGlvbiksXHJcbiAgICAgICAgICAgIGVycm9yOiAoY29sbGVjdGlvbiwgcmVzcG9uc2UpID0+IHRoaXMuZXJyb3JMb2FkQXJ0d29ya3NDb2xsZWN0aW9uKGNvbGxlY3Rpb24sIHJlc3BvbnNlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogU3VjY2VzcyBIYW5kbGVyIHdpbGwgYWRkIEhUTUwgb2YgYXJ0d29ya3MgdG8gdGhpcyAkZWxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvblxyXG4gICAgICovXHJcbiAgICBzdWNjZXNzTG9hZEFydHdvcmtzOiBmdW5jdGlvbiAoY29sbGVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZUNvbGxlY3Rpb25PdmVydmlldyh7YXJ0d29ya3M6IHRoaXMuY29sbGVjdGlvbi5tb2RlbHN9KSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgRXJyb3IgaGFuZGxlciwgdHJpZ2dlciBnbG9iYWwgZXZlbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvblxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIGVycm9yTG9hZEFydHdvcmtzQ29sbGVjdGlvbjogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCdlcnJvclZpZXcnLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLnJlc3BvbnNlSlNPTi5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGljayBoYW5kbGVyLCByZXRyaWV2ZSBkYXRhIGZyb20gdGFyZ2V0IGF0dHJpYnV0ZXMgYW5kIG5hdmlnYXRlIHJvdXRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICB0cmlnZ2VyRGV0YWlsVmlldzogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vR2V0IHRhcmdldCB0aGUgcmV0cmlldmUgZGF0YSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBsZXQgdXJsID0gJ2NvbGxlY3Rpb24vZGV0YWlsLycgKyB0YXJnZXQuZGF0YXNldFsnb2JqZWN0bnVtYmVyJ107XHJcblxyXG4gICAgICAgIC8vVXNlIHRyaWdnZXIgJiByZXBsYWNlIHRvIHVwZGF0ZSBVUkwgYW5kIG1ha2UgdGhlIHJvdXRlciBsaXN0ZW4gdG8gY2hhbmdlXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUodXJsLCB7dHJpZ2dlcjogdHJ1ZSwgcmVwbGFjZTogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uT3ZlcnZpZXc7Il19
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _ArtworksRouter = require('../routers/ArtworksRouter');

var _ArtworksRouter2 = _interopRequireDefault(_ArtworksRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorView = _backbone.View.extend({
    router: null,
    templateError: '',

    initialize: function initialize() {
        this.router = new _ArtworksRouter2.default();
        this.templateError = _underscore2.default.template(this.$('#template-error').html());
        App.events.on('errorView', this.errorHandler, this);
    },

    /**
     * @desc Success Handler will add HTML of message to this $el
     *
     * @param message
     */
    errorHandler: function errorHandler(message) {
        this.$el.html(this.templateError({ message: message }));
    }

});
/**
 * Created by Gebruiker on 14-6-2017.
 */
exports.default = ErrorView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3cy9FcnJvclZpZXcuanMiXSwibmFtZXMiOlsiRXJyb3JWaWV3IiwiZXh0ZW5kIiwicm91dGVyIiwidGVtcGxhdGVFcnJvciIsImluaXRpYWxpemUiLCJ0ZW1wbGF0ZSIsIiQiLCJodG1sIiwiQXBwIiwiZXZlbnRzIiwib24iLCJlcnJvckhhbmRsZXIiLCJtZXNzYWdlIiwiJGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLGVBQUtDLE1BQUwsQ0FBWTtBQUMxQkMsWUFBUSxJQURrQjtBQUUxQkMsbUJBQWUsRUFGVzs7QUFJMUJDLGdCQUFZLHNCQUFZO0FBQ3BCLGFBQUtGLE1BQUwsR0FBYyw4QkFBZDtBQUNBLGFBQUtDLGFBQUwsR0FBcUIscUJBQUVFLFFBQUYsQ0FBVyxLQUFLQyxDQUFMLENBQU8saUJBQVAsRUFBMEJDLElBQTFCLEVBQVgsQ0FBckI7QUFDQUMsWUFBSUMsTUFBSixDQUFXQyxFQUFYLENBQWMsV0FBZCxFQUEyQixLQUFLQyxZQUFoQyxFQUE4QyxJQUE5QztBQUNILEtBUnlCOztBQVUxQjs7Ozs7QUFLQUEsa0JBQWMsc0JBQVVDLE9BQVYsRUFBbUI7QUFDN0IsYUFBS0MsR0FBTCxDQUFTTixJQUFULENBQWMsS0FBS0osYUFBTCxDQUFtQixFQUFDUyxTQUFTQSxPQUFWLEVBQW5CLENBQWQ7QUFDSDs7QUFqQnlCLENBQVosQ0FBbEI7QUFQQTs7O2tCQTRCZVosUyIsImZpbGUiOiJFcnJvclZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgR2VicnVpa2VyIG9uIDE0LTYtMjAxNy5cclxuICovXHJcbmltcG9ydCB7Vmlld30gZnJvbSAnYmFja2JvbmUnO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IEFydHdvcmtzUm91dGVyIGZyb20gJy4uL3JvdXRlcnMvQXJ0d29ya3NSb3V0ZXInO1xyXG5cclxuY29uc3QgRXJyb3JWaWV3ID0gVmlldy5leHRlbmQoe1xyXG4gICAgcm91dGVyOiBudWxsLFxyXG4gICAgdGVtcGxhdGVFcnJvcjogJycsXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IEFydHdvcmtzUm91dGVyKCk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVycm9yID0gXy50ZW1wbGF0ZSh0aGlzLiQoJyN0ZW1wbGF0ZS1lcnJvcicpLmh0bWwoKSk7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbignZXJyb3JWaWV3JywgdGhpcy5lcnJvckhhbmRsZXIsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFN1Y2Nlc3MgSGFuZGxlciB3aWxsIGFkZCBIVE1MIG9mIG1lc3NhZ2UgdG8gdGhpcyAkZWxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBlcnJvckhhbmRsZXI6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlRXJyb3Ioe21lc3NhZ2U6IG1lc3NhZ2V9KSk7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclZpZXc7Il19
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _ArtworksRouter = require('../routers/ArtworksRouter');

var _ArtworksRouter2 = _interopRequireDefault(_ArtworksRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpeditionsOverview = _backbone.View.extend({
    router: null,
    templateExpeditionsOverview: '',

    initialize: function initialize() {
        this.router = new _ArtworksRouter2.default();
        App.events.on('loadExpeditions', this.loadExpeditions, this);
        this.templateExpeditionsOverview = _underscore2.default.template(this.$('#template-expeditionsOverview').html());
    },

    /**
     * @desc wrapper function to load expeditions in rijksmuseum
     *
     */

    loadExpeditions: function loadExpeditions() {
        var _this = this;

        this.collection.fetch({
            success: function success(collection) {
                return _this.successExpeditions(collection);
            },
            error: function error(collection, response) {
                return _this.errorLoadExpeditions(collection, response);
            }
        });
    },

    /**
     * Success Handler will add HTML of expedition to this $el
     *
     * @param collection
     */
    successExpeditions: function successExpeditions(collection) {
        this.$el.html(this.templateExpeditionsOverview({ expeditions: this.collection.models }));
    },

    /**
     * @desc Error handler, trigger global event
     *
     * @param collection
     * @param response
     */
    errorLoadExpeditions: function errorLoadExpeditions(collection, response) {
        App.events.trigger('errorView', {
            message: response.responseJSON.error
        });
    }

}); /**
     * Created by Gebruiker on 23-6-2017.
     */
/**
 * Created by Gebruiker on 14-6-2017.
 */
exports.default = ExpeditionsOverview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3cy9FeHBlZGl0aW9uc092ZXJ2aWV3LmpzIl0sIm5hbWVzIjpbIkV4cGVkaXRpb25zT3ZlcnZpZXciLCJleHRlbmQiLCJyb3V0ZXIiLCJ0ZW1wbGF0ZUV4cGVkaXRpb25zT3ZlcnZpZXciLCJpbml0aWFsaXplIiwiQXBwIiwiZXZlbnRzIiwib24iLCJsb2FkRXhwZWRpdGlvbnMiLCJ0ZW1wbGF0ZSIsIiQiLCJodG1sIiwiY29sbGVjdGlvbiIsImZldGNoIiwic3VjY2VzcyIsInN1Y2Nlc3NFeHBlZGl0aW9ucyIsImVycm9yIiwicmVzcG9uc2UiLCJlcnJvckxvYWRFeHBlZGl0aW9ucyIsIiRlbCIsImV4cGVkaXRpb25zIiwibW9kZWxzIiwidHJpZ2dlciIsIm1lc3NhZ2UiLCJyZXNwb25zZUpTT04iXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixlQUFLQyxNQUFMLENBQVk7QUFDcENDLFlBQVEsSUFENEI7QUFFcENDLGlDQUE2QixFQUZPOztBQUlwQ0MsZ0JBQVksc0JBQVk7QUFDcEIsYUFBS0YsTUFBTCxHQUFjLDhCQUFkO0FBQ0FHLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLGlCQUFkLEVBQWlDLEtBQUtDLGVBQXRDLEVBQXVELElBQXZEO0FBQ0EsYUFBS0wsMkJBQUwsR0FBbUMscUJBQUVNLFFBQUYsQ0FBVyxLQUFLQyxDQUFMLENBQU8sK0JBQVAsRUFBd0NDLElBQXhDLEVBQVgsQ0FBbkM7QUFDSCxLQVJtQzs7QUFVcEM7Ozs7O0FBS0FILHFCQUFpQiwyQkFBWTtBQUFBOztBQUN6QixhQUFLSSxVQUFMLENBQWdCQyxLQUFoQixDQUFzQjtBQUNsQkMscUJBQVMsaUJBQUNGLFVBQUQ7QUFBQSx1QkFBZ0IsTUFBS0csa0JBQUwsQ0FBd0JILFVBQXhCLENBQWhCO0FBQUEsYUFEUztBQUVsQkksbUJBQU8sZUFBQ0osVUFBRCxFQUFhSyxRQUFiO0FBQUEsdUJBQTBCLE1BQUtDLG9CQUFMLENBQTBCTixVQUExQixFQUFzQ0ssUUFBdEMsQ0FBMUI7QUFBQTtBQUZXLFNBQXRCO0FBSUgsS0FwQm1DOztBQXNCcEM7Ozs7O0FBS0FGLHdCQUFvQiw0QkFBVUgsVUFBVixFQUFzQjtBQUN0QyxhQUFLTyxHQUFMLENBQVNSLElBQVQsQ0FBYyxLQUFLUiwyQkFBTCxDQUFpQyxFQUFDaUIsYUFBYSxLQUFLUixVQUFMLENBQWdCUyxNQUE5QixFQUFqQyxDQUFkO0FBQ0gsS0E3Qm1DOztBQStCcEM7Ozs7OztBQU1BSCwwQkFBc0IsOEJBQVVOLFVBQVYsRUFBc0JLLFFBQXRCLEVBQWdDO0FBQ2xEWixZQUFJQyxNQUFKLENBQVdnQixPQUFYLENBQW1CLFdBQW5CLEVBQWdDO0FBQzVCQyxxQkFBU04sU0FBU08sWUFBVCxDQUFzQlI7QUFESCxTQUFoQztBQUdIOztBQXpDbUMsQ0FBWixDQUE1QixDLENBVkE7OztBQUdBOzs7a0JBb0RlaEIsbUIiLCJmaWxlIjoiRXhwZWRpdGlvbnNPdmVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEdlYnJ1aWtlciBvbiAyMy02LTIwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBHZWJydWlrZXIgb24gMTQtNi0yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtWaWV3fSBmcm9tICdiYWNrYm9uZSc7XHJcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgQXJ0d29ya3NSb3V0ZXIgZnJvbSAnLi4vcm91dGVycy9BcnR3b3Jrc1JvdXRlcic7XHJcblxyXG5jb25zdCBFeHBlZGl0aW9uc092ZXJ2aWV3ID0gVmlldy5leHRlbmQoe1xyXG4gICAgcm91dGVyOiBudWxsLFxyXG4gICAgdGVtcGxhdGVFeHBlZGl0aW9uc092ZXJ2aWV3OiAnJyxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgQXJ0d29ya3NSb3V0ZXIoKTtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKCdsb2FkRXhwZWRpdGlvbnMnLCB0aGlzLmxvYWRFeHBlZGl0aW9ucywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUV4cGVkaXRpb25zT3ZlcnZpZXcgPSBfLnRlbXBsYXRlKHRoaXMuJCgnI3RlbXBsYXRlLWV4cGVkaXRpb25zT3ZlcnZpZXcnKS5odG1sKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIHdyYXBwZXIgZnVuY3Rpb24gdG8gbG9hZCBleHBlZGl0aW9ucyBpbiByaWprc211c2V1bVxyXG4gICAgICpcclxuICAgICAqL1xyXG5cclxuICAgIGxvYWRFeHBlZGl0aW9uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5mZXRjaCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChjb2xsZWN0aW9uKSA9PiB0aGlzLnN1Y2Nlc3NFeHBlZGl0aW9ucyhjb2xsZWN0aW9uKSxcclxuICAgICAgICAgICAgZXJyb3I6IChjb2xsZWN0aW9uLCByZXNwb25zZSkgPT4gdGhpcy5lcnJvckxvYWRFeHBlZGl0aW9ucyhjb2xsZWN0aW9uLCByZXNwb25zZSlcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWNjZXNzIEhhbmRsZXIgd2lsbCBhZGQgSFRNTCBvZiBleHBlZGl0aW9uIHRvIHRoaXMgJGVsXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25cclxuICAgICAqL1xyXG4gICAgc3VjY2Vzc0V4cGVkaXRpb25zOiBmdW5jdGlvbiAoY29sbGVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZUV4cGVkaXRpb25zT3ZlcnZpZXcoe2V4cGVkaXRpb25zOiB0aGlzLmNvbGxlY3Rpb24ubW9kZWxzfSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIEVycm9yIGhhbmRsZXIsIHRyaWdnZXIgZ2xvYmFsIGV2ZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25cclxuICAgICAqIEBwYXJhbSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBlcnJvckxvYWRFeHBlZGl0aW9uczogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCdlcnJvclZpZXcnLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLnJlc3BvbnNlSlNPTi5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVkaXRpb25zT3ZlcnZpZXc7Il19
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _ArtworksRouter = require('../routers/ArtworksRouter');

var _ArtworksRouter2 = _interopRequireDefault(_ArtworksRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadCollectionButton = _backbone.View.extend({

    router: null,
    templateArtObject: '',

    events: {
        "click #loadArtworks": "clickButtonHandler"
    },

    initialize: function initialize() {
        this.router = new _ArtworksRouter2.default();
    },

    /**
     * Click handler for button loadArtworks and navigate router
     *
     * @param e
     */
    clickButtonHandler: function clickButtonHandler(e) {
        e.preventDefault();

        var url = "collection";

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, { trigger: true, replace: true });
    }

});

exports.default = LoadCollectionButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3cy9Mb2FkQ29sbGVjdGlvbkJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJMb2FkQ29sbGVjdGlvbkJ1dHRvbiIsImV4dGVuZCIsInJvdXRlciIsInRlbXBsYXRlQXJ0T2JqZWN0IiwiZXZlbnRzIiwiaW5pdGlhbGl6ZSIsImNsaWNrQnV0dG9uSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsIm5hdmlnYXRlIiwidHJpZ2dlciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsZUFBS0MsTUFBTCxDQUFZOztBQUVyQ0MsWUFBUSxJQUY2QjtBQUdyQ0MsdUJBQW1CLEVBSGtCOztBQUtyQ0MsWUFBUTtBQUNKLCtCQUF1QjtBQURuQixLQUw2Qjs7QUFTckNDLGdCQUFZLHNCQUFZO0FBQ3BCLGFBQUtILE1BQUwsR0FBYyw4QkFBZDtBQUNILEtBWG9DOztBQWFyQzs7Ozs7QUFLQUksd0JBQW9CLDRCQUFVQyxDQUFWLEVBQWE7QUFDN0JBLFVBQUVDLGNBQUY7O0FBRUEsWUFBSUMsTUFBTSxZQUFWOztBQUVBO0FBQ0EsYUFBS1AsTUFBTCxDQUFZUSxRQUFaLENBQXFCRCxHQUFyQixFQUEwQixFQUFDRSxTQUFTLElBQVYsRUFBZ0JDLFNBQVMsSUFBekIsRUFBMUI7QUFDSDs7QUF6Qm9DLENBQVosQ0FBN0I7O2tCQTZCZVosb0IiLCJmaWxlIjoiTG9hZENvbGxlY3Rpb25CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gJ2JhY2tib25lJztcclxuaW1wb3J0IEFydHdvcmtzUm91dGVyIGZyb20gJy4uL3JvdXRlcnMvQXJ0d29ya3NSb3V0ZXInO1xyXG5cclxuY29uc3QgTG9hZENvbGxlY3Rpb25CdXR0b24gPSBWaWV3LmV4dGVuZCh7XHJcblxyXG4gICAgcm91dGVyOiBudWxsLFxyXG4gICAgdGVtcGxhdGVBcnRPYmplY3Q6ICcnLFxyXG5cclxuICAgIGV2ZW50czoge1xyXG4gICAgICAgIFwiY2xpY2sgI2xvYWRBcnR3b3Jrc1wiOiBcImNsaWNrQnV0dG9uSGFuZGxlclwiXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBBcnR3b3Jrc1JvdXRlcjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGljayBoYW5kbGVyIGZvciBidXR0b24gbG9hZEFydHdvcmtzIGFuZCBuYXZpZ2F0ZSByb3V0ZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICBjbGlja0J1dHRvbkhhbmRsZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gXCJjb2xsZWN0aW9uXCI7XHJcblxyXG4gICAgICAgIC8vVXNlIHRyaWdnZXIgJiByZXBsYWNlIHRvIHVwZGF0ZSBVUkwgYW5kIG1ha2UgdGhlIHJvdXRlciBsaXN0ZW4gdG8gY2hhbmdlXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUodXJsLCB7dHJpZ2dlcjogdHJ1ZSwgcmVwbGFjZTogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkQ29sbGVjdGlvbkJ1dHRvbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = require('backbone');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _ArtworksRouter = require('../routers/ArtworksRouter');

var _ArtworksRouter2 = _interopRequireDefault(_ArtworksRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PainterSelector = _backbone.View.extend({
    router: null,
    templateCollectionOverview: '',

    events: {
        "click select": "optionClicked"
    },

    initialize: function initialize() {
        this.router = new _ArtworksRouter2.default();
        this.templatePainterSelector = _underscore2.default.template(this.$('#template-painterSelector').html());
        this.loadPainters();
    },

    /**
     *@desc Wrapper function to load the first page of painters through the collection
     *
     */
    loadPainters: function loadPainters() {
        var _this = this;

        this.collection.getFirstPage({
            success: function success(collection) {
                return _this.loadNextPage();
            },
            error: function error(collection, response) {
                return _this.fetchErrorHandler(collection, response);
            }
        });
    },

    /**
     *@desc on succes loadPainters
     * Wrapper function to load the next page till total pages is reached.
     * This is done to collect all painters in the collection of Rijksmuseum. They have limited
     * the total artobject you can retrieve. That is why here we iterate through the pages
     *
     */
    loadNextPage: function loadNextPage() {
        var _this2 = this;

        if (this.collection.hasNextPage() === true) {
            this.collection.getNextPage({
                remove: false,
                success: function success(collection) {
                    return _this2.loadNextPage();
                },
                error: function error(collection, response) {
                    return _this2.fetchErrorHandler(collection, response);
                }
            });
        } else {
            this.renderSelectorView();
        }
    },

    /**
     * @desc Will add HTML of painters name to this $el
     *
     */
    renderSelectorView: function renderSelectorView() {
        // filter all duplicate names. to make unique list
        var paintersUnique = _underscore2.default.uniq(this.collection.pluck('principalOrFirstMaker'));
        //merge the array together so that it is easier to collect the data in the template
        var merged = [].concat.apply([], paintersUnique);
        this.$el.html(this.templatePainterSelector({ painters: merged }));
        //this.$el.html(this.templateArtworkDetail({artworkDetailMaker: model}));
    },

    /**
     * @desc Error handler, trigger global event
     *
     * @param collection
     * @param response
     */
    fetchErrorHandler: function fetchErrorHandler(collection, response) {
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
    optionClicked: function optionClicked(e) {
        e.preventDefault();

        //Get target the retrieve data properties
        var target = e.currentTarget;

        //get the option inside the target. here the painter name is stored
        var painter = $(target).find(':selected').attr('data-painter');

        //default value just load all artworks
        if (painter === "default") {
            var url = "collection";
            this.router.navigate(url, { trigger: true, replace: true });
        } else {
            var _url = "painter/" + painter;

            //Use trigger & replace to update URL and make the router listen to change
            this.router.navigate(_url, { trigger: true, replace: true });
        }
    }

});

exports.default = PainterSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3cy9QYWludGVyU2VsZWN0b3IuanMiXSwibmFtZXMiOlsiUGFpbnRlclNlbGVjdG9yIiwiZXh0ZW5kIiwicm91dGVyIiwidGVtcGxhdGVDb2xsZWN0aW9uT3ZlcnZpZXciLCJldmVudHMiLCJpbml0aWFsaXplIiwidGVtcGxhdGVQYWludGVyU2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsIiQiLCJodG1sIiwibG9hZFBhaW50ZXJzIiwiY29sbGVjdGlvbiIsImdldEZpcnN0UGFnZSIsInN1Y2Nlc3MiLCJsb2FkTmV4dFBhZ2UiLCJlcnJvciIsInJlc3BvbnNlIiwiZmV0Y2hFcnJvckhhbmRsZXIiLCJoYXNOZXh0UGFnZSIsImdldE5leHRQYWdlIiwicmVtb3ZlIiwicmVuZGVyU2VsZWN0b3JWaWV3IiwicGFpbnRlcnNVbmlxdWUiLCJ1bmlxIiwicGx1Y2siLCJtZXJnZWQiLCJjb25jYXQiLCJhcHBseSIsIiRlbCIsInBhaW50ZXJzIiwiQXBwIiwidHJpZ2dlciIsIm1lc3NhZ2UiLCJyZXNwb25zZUpTT04iLCJvcHRpb25DbGlja2VkIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBhaW50ZXIiLCJmaW5kIiwiYXR0ciIsInVybCIsIm5hdmlnYXRlIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLGVBQUtDLE1BQUwsQ0FBWTtBQUNoQ0MsWUFBUSxJQUR3QjtBQUVoQ0MsZ0NBQTRCLEVBRkk7O0FBSWhDQyxZQUFRO0FBQ0osd0JBQWdCO0FBRFosS0FKd0I7O0FBUWhDQyxnQkFBWSxzQkFBWTtBQUNwQixhQUFLSCxNQUFMLEdBQWMsOEJBQWQ7QUFDQSxhQUFLSSx1QkFBTCxHQUErQixxQkFBRUMsUUFBRixDQUFXLEtBQUtDLENBQUwsQ0FBTywyQkFBUCxFQUFvQ0MsSUFBcEMsRUFBWCxDQUEvQjtBQUNBLGFBQUtDLFlBQUw7QUFDSCxLQVorQjs7QUFjaEM7Ozs7QUFJQUEsa0JBQWMsd0JBQVk7QUFBQTs7QUFDdEIsYUFBS0MsVUFBTCxDQUFnQkMsWUFBaEIsQ0FBNkI7QUFDekJDLHFCQUFTLGlCQUFDRixVQUFEO0FBQUEsdUJBQWdCLE1BQUtHLFlBQUwsRUFBaEI7QUFBQSxhQURnQjtBQUV6QkMsbUJBQU8sZUFBQ0osVUFBRCxFQUFhSyxRQUFiO0FBQUEsdUJBQTBCLE1BQUtDLGlCQUFMLENBQXVCTixVQUF2QixFQUFtQ0ssUUFBbkMsQ0FBMUI7QUFBQTtBQUZrQixTQUE3QjtBQUlILEtBdkIrQjs7QUF5QmhDOzs7Ozs7O0FBT0FGLGtCQUFjLHdCQUFZO0FBQUE7O0FBQ3RCLFlBQUksS0FBS0gsVUFBTCxDQUFnQk8sV0FBaEIsT0FBa0MsSUFBdEMsRUFBNEM7QUFDeEMsaUJBQUtQLFVBQUwsQ0FBZ0JRLFdBQWhCLENBQTRCO0FBQ3hCQyx3QkFBUSxLQURnQjtBQUV4QlAseUJBQVMsaUJBQUNGLFVBQUQ7QUFBQSwyQkFBZ0IsT0FBS0csWUFBTCxFQUFoQjtBQUFBLGlCQUZlO0FBR3hCQyx1QkFBTyxlQUFDSixVQUFELEVBQWFLLFFBQWI7QUFBQSwyQkFBMEIsT0FBS0MsaUJBQUwsQ0FBdUJOLFVBQXZCLEVBQW1DSyxRQUFuQyxDQUExQjtBQUFBO0FBSGlCLGFBQTVCO0FBS0gsU0FORCxNQU1PO0FBQ0gsaUJBQUtLLGtCQUFMO0FBQ0g7QUFDSixLQTFDK0I7O0FBNENoQzs7OztBQUlBQSx3QkFBb0IsOEJBQVk7QUFDNUI7QUFDQSxZQUFJQyxpQkFBaUIscUJBQUVDLElBQUYsQ0FBTyxLQUFLWixVQUFMLENBQWdCYSxLQUFoQixDQUFzQix1QkFBdEIsQ0FBUCxDQUFyQjtBQUNBO0FBQ0EsWUFBSUMsU0FBUyxHQUFHQyxNQUFILENBQVVDLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0JMLGNBQXBCLENBQWI7QUFDQSxhQUFLTSxHQUFMLENBQVNuQixJQUFULENBQWMsS0FBS0gsdUJBQUwsQ0FBNkIsRUFBQ3VCLFVBQVVKLE1BQVgsRUFBN0IsQ0FBZDtBQUNBO0FBQ0gsS0F2RCtCOztBQXlEaEM7Ozs7OztBQU1BUix1QkFBbUIsMkJBQVVOLFVBQVYsRUFBc0JLLFFBQXRCLEVBQWdDO0FBQy9DYyxZQUFJMUIsTUFBSixDQUFXMkIsT0FBWCxDQUFtQixXQUFuQixFQUFnQztBQUM1QkMscUJBQVNoQixTQUFTaUIsWUFBVCxDQUFzQmxCO0FBREgsU0FBaEM7QUFHSCxLQW5FK0I7O0FBcUVoQzs7Ozs7O0FBTUFtQixtQkFBZSx1QkFBVUMsQ0FBVixFQUFhO0FBQ3hCQSxVQUFFQyxjQUFGOztBQUVBO0FBQ0EsWUFBSUMsU0FBU0YsRUFBRUcsYUFBZjs7QUFFQTtBQUNBLFlBQUlDLFVBQVUvQixFQUFFNkIsTUFBRixFQUFVRyxJQUFWLENBQWUsV0FBZixFQUE0QkMsSUFBNUIsQ0FBaUMsY0FBakMsQ0FBZDs7QUFFQTtBQUNBLFlBQUdGLFlBQVksU0FBZixFQUF5QjtBQUNyQixnQkFBSUcsTUFBTSxZQUFWO0FBQ0EsaUJBQUt4QyxNQUFMLENBQVl5QyxRQUFaLENBQXFCRCxHQUFyQixFQUEwQixFQUFDWCxTQUFTLElBQVYsRUFBZ0JhLFNBQVMsSUFBekIsRUFBMUI7QUFDSCxTQUhELE1BR0s7QUFDRCxnQkFBSUYsT0FBTSxhQUFhSCxPQUF2Qjs7QUFFQTtBQUNBLGlCQUFLckMsTUFBTCxDQUFZeUMsUUFBWixDQUFxQkQsSUFBckIsRUFBMEIsRUFBQ1gsU0FBUyxJQUFWLEVBQWdCYSxTQUFTLElBQXpCLEVBQTFCO0FBQ0g7QUFDSjs7QUE5RitCLENBQVosQ0FBeEI7O2tCQWtHZTVDLGUiLCJmaWxlIjoiUGFpbnRlclNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tICdiYWNrYm9uZSc7XHJcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgQXJ0d29ya3NSb3V0ZXIgZnJvbSAnLi4vcm91dGVycy9BcnR3b3Jrc1JvdXRlcic7XHJcblxyXG5jb25zdCBQYWludGVyU2VsZWN0b3IgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICByb3V0ZXI6IG51bGwsXHJcbiAgICB0ZW1wbGF0ZUNvbGxlY3Rpb25PdmVydmlldzogJycsXHJcblxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgXCJjbGljayBzZWxlY3RcIjogXCJvcHRpb25DbGlja2VkXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBBcnR3b3Jrc1JvdXRlcigpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVQYWludGVyU2VsZWN0b3IgPSBfLnRlbXBsYXRlKHRoaXMuJCgnI3RlbXBsYXRlLXBhaW50ZXJTZWxlY3RvcicpLmh0bWwoKSk7XHJcbiAgICAgICAgdGhpcy5sb2FkUGFpbnRlcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKkBkZXNjIFdyYXBwZXIgZnVuY3Rpb24gdG8gbG9hZCB0aGUgZmlyc3QgcGFnZSBvZiBwYWludGVycyB0aHJvdWdoIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBsb2FkUGFpbnRlcnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24uZ2V0Rmlyc3RQYWdlKHtcclxuICAgICAgICAgICAgc3VjY2VzczogKGNvbGxlY3Rpb24pID0+IHRoaXMubG9hZE5leHRQYWdlKCksXHJcbiAgICAgICAgICAgIGVycm9yOiAoY29sbGVjdGlvbiwgcmVzcG9uc2UpID0+IHRoaXMuZmV0Y2hFcnJvckhhbmRsZXIoY29sbGVjdGlvbiwgcmVzcG9uc2UpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpAZGVzYyBvbiBzdWNjZXMgbG9hZFBhaW50ZXJzXHJcbiAgICAgKiBXcmFwcGVyIGZ1bmN0aW9uIHRvIGxvYWQgdGhlIG5leHQgcGFnZSB0aWxsIHRvdGFsIHBhZ2VzIGlzIHJlYWNoZWQuXHJcbiAgICAgKiBUaGlzIGlzIGRvbmUgdG8gY29sbGVjdCBhbGwgcGFpbnRlcnMgaW4gdGhlIGNvbGxlY3Rpb24gb2YgUmlqa3NtdXNldW0uIFRoZXkgaGF2ZSBsaW1pdGVkXHJcbiAgICAgKiB0aGUgdG90YWwgYXJ0b2JqZWN0IHlvdSBjYW4gcmV0cmlldmUuIFRoYXQgaXMgd2h5IGhlcmUgd2UgaXRlcmF0ZSB0aHJvdWdoIHRoZSBwYWdlc1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbG9hZE5leHRQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbi5oYXNOZXh0UGFnZSgpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5nZXROZXh0UGFnZSh7XHJcbiAgICAgICAgICAgICAgICByZW1vdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGNvbGxlY3Rpb24pID0+IHRoaXMubG9hZE5leHRQYWdlKCksXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKGNvbGxlY3Rpb24sIHJlc3BvbnNlKSA9PiB0aGlzLmZldGNoRXJyb3JIYW5kbGVyKGNvbGxlY3Rpb24sIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU2VsZWN0b3JWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFdpbGwgYWRkIEhUTUwgb2YgcGFpbnRlcnMgbmFtZSB0byB0aGlzICRlbFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcmVuZGVyU2VsZWN0b3JWaWV3OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZmlsdGVyIGFsbCBkdXBsaWNhdGUgbmFtZXMuIHRvIG1ha2UgdW5pcXVlIGxpc3RcclxuICAgICAgICBsZXQgcGFpbnRlcnNVbmlxdWUgPSBfLnVuaXEodGhpcy5jb2xsZWN0aW9uLnBsdWNrKCdwcmluY2lwYWxPckZpcnN0TWFrZXInKSk7XHJcbiAgICAgICAgLy9tZXJnZSB0aGUgYXJyYXkgdG9nZXRoZXIgc28gdGhhdCBpdCBpcyBlYXNpZXIgdG8gY29sbGVjdCB0aGUgZGF0YSBpbiB0aGUgdGVtcGxhdGVcclxuICAgICAgICBsZXQgbWVyZ2VkID0gW10uY29uY2F0LmFwcGx5KFtdLCBwYWludGVyc1VuaXF1ZSk7XHJcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlUGFpbnRlclNlbGVjdG9yKHtwYWludGVyczogbWVyZ2VkfSkpO1xyXG4gICAgICAgIC8vdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlQXJ0d29ya0RldGFpbCh7YXJ0d29ya0RldGFpbE1ha2VyOiBtb2RlbH0pKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBFcnJvciBoYW5kbGVyLCB0cmlnZ2VyIGdsb2JhbCBldmVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uXHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgZmV0Y2hFcnJvckhhbmRsZXI6IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCByZXNwb25zZSkge1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcignZXJyb3JWaWV3Jywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5yZXNwb25zZUpTT04uZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVjIENsaWNrIGhhbmRsZXIsIHJldHJpZXZlIGRhdGEgZnJvbSB0YXJnZXQgYXR0cmlidXRlcyBhbmQgbmF2aWdhdGUgcm91dGVyLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICBvcHRpb25DbGlja2VkOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy9HZXQgdGFyZ2V0IHRoZSByZXRyaWV2ZSBkYXRhIHByb3BlcnRpZXNcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICAvL2dldCB0aGUgb3B0aW9uIGluc2lkZSB0aGUgdGFyZ2V0LiBoZXJlIHRoZSBwYWludGVyIG5hbWUgaXMgc3RvcmVkXHJcbiAgICAgICAgbGV0IHBhaW50ZXIgPSAkKHRhcmdldCkuZmluZCgnOnNlbGVjdGVkJykuYXR0cignZGF0YS1wYWludGVyJyk7XHJcblxyXG4gICAgICAgIC8vZGVmYXVsdCB2YWx1ZSBqdXN0IGxvYWQgYWxsIGFydHdvcmtzXHJcbiAgICAgICAgaWYocGFpbnRlciA9PT0gXCJkZWZhdWx0XCIpe1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gXCJjb2xsZWN0aW9uXCI7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHVybCwge3RyaWdnZXI6IHRydWUsIHJlcGxhY2U6IHRydWV9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IHVybCA9IFwicGFpbnRlci9cIiArIHBhaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAvL1VzZSB0cmlnZ2VyICYgcmVwbGFjZSB0byB1cGRhdGUgVVJMIGFuZCBtYWtlIHRoZSByb3V0ZXIgbGlzdGVuIHRvIGNoYW5nZVxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSh1cmwsIHt0cmlnZ2VyOiB0cnVlLCByZXBsYWNlOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWludGVyU2VsZWN0b3I7Il19
