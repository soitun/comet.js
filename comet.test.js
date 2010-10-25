module( "comet", {
	setup: function() {
	},
	teardown: function() {
	}
} );

asyncTest( "success", function() {
	expect( 2 );
	stop();
	var connection = new comet("data/json.php?sleep=5");
	connection.a( "open", function( e ) {
		ok( true, "open" );
	} ).a( "message", function( e, data ) {
		start();
		ok( data && data.name, "get message" );
		connection.close();
	} );
} );

asyncTest( "faild", function() {
	expect( 2 );
	stop();
	console.log( 22 );
	var connection = new comet("data/json2.php?sleep=5");
	connection.a( "close", function( e ) {
		console.log( arguments );
	} ).a( "error", function( e, data ) {
		console.log( arguments );
	} );
} );

