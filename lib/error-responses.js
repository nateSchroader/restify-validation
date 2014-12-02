var _this = this;
module.exports = function( param, validation ){
    var result = '';

    switch( validation ){
        case 'isString':
            result = param + ' must be a string';
            break;
        default:
            result = param + ' is invalid';
    }

    return result;
};