'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = jQuery; //Declare JQuery

var CM2Theme = function () {
    function CM2Theme() {
        _classCallCheck(this, CM2Theme);

        this.initialize(), this.actions();
    }

    _createClass(CM2Theme, [{
        key: 'initialize',
        value: function initialize() {
            console.log('test');
        }
    }, {
        key: 'actions',
        value: function actions() {}
    }]);

    return CM2Theme;
}();

new CM2Theme();