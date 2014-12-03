var _this = this;
var _ = require( 'lodash' );
var errorResponses = require( './error-responses.js' );

module.exports = function( param, validation ){
    var response = errorResponses['default'];
    if( errorResponses.hasOwnProperty( validation ) ){
        response = errorResponses[validation]
    }

    return { param: param, validation: validation, response: response };
};