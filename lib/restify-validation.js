var _this = this;
var _ = require( 'lodash' );
_.mixin( require( 'lodash-deep' ) );

var error = require( './error.js' );
var validators = require( './validators.js' );

var _validator = function( req, res, next ){

    if( req.validationErrors === undefined ){
        req.validationErrors = [];
    }

    var _assert = function( param, validation, options ){

        var value;
        if( _.isString( param ) ){
            if( param.indexOf( '.' ) === -1 ){
                value = req.params[ param ];
            }
            else{
                value = _.deepGet( req.params, param );
            }
        }
        else{
            // TODO: return error
        }

        if( validators.hasOwnProperty( validation ) && _.isFunction( validators[ validation ] ) ){
            if( !validators[ validation ]( value ) ){

                // Invalid
                var result = error( param, validation );
                req.validationErrors.push( result );
                return result;
            }
            else {
                return true;
            }
        }
        else {
            // TODO: return error (validation not found)
        }
    };

    req.assert = _assert;

    return next();
};

var restifyValidator = function( options ){
    return [ _validator ];
};

module.exports = restifyValidator;