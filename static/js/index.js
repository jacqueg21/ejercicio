var cont=0;
function SENSOR1() {
         //alert("clic");
        console.log("Encendido sensor1");
        message = new Paho.MQTT.Message("Encendido sensor1");
        message.destinationName = "jcguailla.fie@unach.edu.ec/test1";
        client.send(message);
  
}
function SENSOR2(){	
        //alert("clic");
        console.log("Encendido sensor2");
        message = new Paho.MQTT.Message("Encendido sensor2");
        message.destinationName = "jcguailla.fie@unach.edu.ec/test1";
        client.send(message);
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
	
    client.subscribe("jcguailla.fie@unach.edu.ec/test1");
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
    console.log("onMessageArrived:"+message.payloadString);
          mensaje=message.payloadString;
          if(mensaje[0]=="0"){
              document.getElementById("sen").innerHTML=mensaje;  
          }
          if(historiales[0]=="1"){
              document.getElementById("sen2").innerHTML=mensaje;
          }
          
  }
