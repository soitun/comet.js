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
	expect( 1 );
	stop();
	var connection = new comet("data/json2.php?sleep=5");
	connection.a( "close", function( e ) {
	} ).a( "error", function( e, data ) {
		start();
		ok( true, "connect error" );
	} );
} );

