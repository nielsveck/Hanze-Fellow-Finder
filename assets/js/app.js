$( function() {
	$('#searchButton').click(function() {
		alert('test');
		//document.addEventListener("deviceready", onDeviceReady, false);
	});
	
	function reachableCallback(reachability) {
		// There is no consistency on the format of reachability
		var networkState = reachability.code || reachability;
		var states = {};
		states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
		states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
		states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';
		alert('Connection type: ' + states[networkState]);
	}
	// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
	function onDeviceReady() {
		navigator.network.isReachable('phonegap.com', reachableCallback);
	}
