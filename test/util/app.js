var _ = require( 'lodash' );
var restify = require( 'restify' );
var restifyValidation = require( '../index.js' );
var server = restify.createServer( {
    name: 'Test API',
    version: '1.0.0'
} );

server.use( restify.acceptParser( server.acceptable ) );
server.use( restify.queryParser() );
server.use( restify.bodyParser() );
server.use( restify.authorizationParser() );
server.use( restify.CORS() );
server.use( restify.fullResponse() );
server.use( restifyValidation() );

restify.CORS.ALLOW_HEADERS.push( 'authorization' );

server.listen( 3000, function(){
} );

server.post( '/test', function( req, res, next ){

    req.assert( 'name', 'isNumerical', {} );

    if( !_.isEmpty( req.validationErrors ) ){
        res.send( 200, req.validationErrors );
    }
    else{
        res.send( 200, { valid: true } );
    }

    return next();
} );
