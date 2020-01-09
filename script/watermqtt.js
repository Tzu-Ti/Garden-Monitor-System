const MQTT_HOST = "ws://wttraspberryserver.ddns.net:11883/";

const WATER_PUB = "WATER";
const WATER_SUB = "WATERDONE";

var options = {
    onSuccess: onConnect,
    onFailure: doFail
}

var client = false;

function onConnect() {
	console.log("Connect success. (" + MQTT_HOST + ")" );
    client.subscribe(WATER_SUB);
}

function onMessageArrived(message) {
    if(message.destinationName == WATER_SUB) {
        console.log("water ok");
        clearInterval(tenSec);
        $("#shadow").fadeToggle();
        setTimeout(function() {
            $("#pub").fadeToggle();
        }, 800);
    }
}

function publish_message() {
    // var txtQuery = $("#query").val();
    var text = "publish WATER!!!!!!";
    var message = new Paho.MQTT.Message(text);
    message.destinationName = WATER_PUB;
    client.send(message);
}

function doFail(e){
    console.log("Fail:" + e.errorMessage);
}

function onConnectionLost(responseObject) {
	if (responseObject.errorCode !== 0) {
		console.log("Connect lost:" + responseObject.errorMessage);
	}
}

client = new Paho.MQTT.Client( MQTT_HOST, "web_" + parseInt(Math.random() * 100, 10) );
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect(options);

var tenSec;
$(function() {
    $("#pub").bind("click", function() {
        console.log("fdsfdsfds");
        publish_message();
        $("#pub").fadeToggle();
        setTimeout(function() {
            $("#shadow").fadeToggle();
        }, 800);
        var i = 9;
        tenSec = setInterval(() => {
            $("#shadow").text("Watering...\n"+i);
            i--;
        }, 1000);
    });
});