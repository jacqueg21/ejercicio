//https://www.eclipse.org/paho/clients/js/

function Encender_LED1() {
	//alert("led on");
	console.log("led uno");
	//document.getElementById("sensor").innerHTML="Encendido";
	message = new Paho.MQTT.Message("Encendido sensor1");
    	message.destinationName = "jcguailla.fie@unach.edu.ec/test1";
    	client.send(message);
  
}
function Encender_LED2(){	
	//alert("led off");
	console.log("led dos");
	message = new Paho.MQTT.Message("Encendido sensor2");
    	message.destinationName = "jcguailla.fie@unach.edu.ec/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function HISTORIAL(){	
	console.log("Historial Datos");
	message = new Paho.MQTT.Message("LEDHISTORY");
    	message.destinationName = "jcguailla.fie@unach.edu.ec/test1";
    	client.send(message);
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jcguailla.fie@unach.edu.ec",
    password: "cris71n4",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jcguailla.fie@unach.edu.ec/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jcguailla.fie@unach.edu.ec/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    sms=(message.payloadString);
    if(sms=="Sensor 1"){
	    document.getElementById("sensor").innerHTML = sms;
	    document.getElementById("history").innerHTML = "";
    }
    if(sms=="Sensor 2"){
	    document.getElementById("sensor2").innerHTML = sms;
	    document.getElementById("history").innerHTML = "";
    }
     if(sms=="Sensor 1"){
	    document.getElementById("history").innerHTML = sms;
    }
	  
     if(sms=="Sensor 2"){
	    document.getElementById("history").innerHTML = sms;
    }
  }
  
