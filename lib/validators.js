var _this = this;
var _ = require( 'lodash' );

var validators = module.exports = {
    isString: function( value ){
        return _.isString( value );
    }
};