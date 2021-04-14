var cont=0;
function estado() {
         //alert("clic");
        console.log("sensoruno");
        message = new Paho.MQTT.Message("sensoruno");
        message.destinationName = "jguailla.fie@unach.edu.ec/test1";
        client.send(message);
  
}
function historial(){	
        //alert("clic");
        console.log("sensordos");
        message = new Paho.MQTT.Message("sensordos");
        message.destinationName = "jguailla.fie@unach.edu.ec/test1";
        client.send(message);
        //document.getElementById("sensor").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  var counter=0;
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
   // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;


  var options = {
   useSSL: false,
    userName: "jguailla.fie@unach.edu.ec",
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
	
    client.subscribe("jguailla.fie@unach.edu.ec/test1");
    
    
	
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
    console.log("onMessageArrived:"+message.payloadString);
          historiales=message.payloadString;
          if(historiales[0]=="0"){
              document.getElementById("hist1").innerHTML=historiales;  
          }
          if(historiales[0]=="1"){
              document.getElementById("hist2").innerHTML=historiales;
          }
          
  }
