var _this = this;
var _ = require( 'lodash' );

var validators = module.exports = {
    isString: function( value ){
        return _.isString( value );
    },
    isObject: function( value ){
        return _.isObject( value );
    },
    isArray: function( value ){
        return _.isArray( value );
    },
    isBoolean: function( value ){
        return _.isBoolean( value );
    },
    isEmpty: function( value ){
        return _.isEmpty( value );
    },
    isFunction: function( value ){
        return _.isFunction( value );
    },
    isNaN: function( value ){
        return _.isNaN( value );
    },
    isNumber: function( value ){
        return _.isNumber( value );
    },
    isDate: function( value ){
        return !isNaN( Date.parse( value ) );
    }
};