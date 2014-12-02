var _this = this;
var _ = require( 'lodash' );
_.mixin( require( 'lodash-deep' ) );

var validators = require( './validators.js' );

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

        }
        else {

        }
    }
};

var _validator = function( req, res, next ){

    if( req.validationErrors === undefined ){
        req.validationErrors = [];
    }

    req.assert = _assert;

//        validator.error = function( msg ){
//            var error = {
//                param: param,
//                msg: msg,
//                value: value
//            };
//            if( req._validationErrors === undefined ){
//                req._validationErrors = [];
//            }
//            req._validationErrors.push( error );
//
//            if( req.onErrorCallback ){
//                req.onErrorCallback( msg );
//            }
//            return this;
//        };
//
//        return validator.assert( value, fail_msg );

    return next();
};

var restifyValidator = function( options ){
    return [ _validator ];
};

module.exports = restifyValidator;