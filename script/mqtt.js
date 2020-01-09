const MQTT_HOST = "ws://wttraspberryserver.ddns.net:11883/";

const WATER_PUB = "WATER";
const WATER_SUB = "WATERDONE";
const SCHEDULE_PUB = "SCHEDULE";
const SCHEDULE_SUB = "SCHEDULEDONE"

var options = {
    onSuccess: onConnect,
    onFailure: doFail
}

var client = false;

function onConnect() {
	console.log("Connect success. (" + MQTT_HOST + ")" );
    // client.subscribe(WATER_SUB);
    client.subscribe(SCHEDULE_SUB);
}

function onMessageArrived(message) {
    if(message.destinationName == SCHEDULE_SUB) {
        alert("Schedule Updated!");
    }
}

// function publish_message() {
//     // var txtQuery = $("#query").val();
//     var text = "publish WATER!!!!!!";
//     var message = new Paho.MQTT.Message(text);
//     message.destinationName = WATER_PUB;
//     client.send(message);
// }

function publish_schedule(schedule) {
    console.log("publish schedule");
    var message = new Paho.MQTT.Message(schedule);
    message.destinationName = SCHEDULE_PUB;
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