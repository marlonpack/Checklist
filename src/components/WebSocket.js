
export  const ws = new WebSocket('ws://192.168.0.99:9191');





//  ws.onopen = function (index) {

//     console.log(index)
//     // let jsonString = {
//     //   id: 5,
//     //   name: 'Marlon'
//     // };

//     ws.send(JSON.stringify(index));

//   },




 ws.onerror = function (ev) {
    alert("Erro: " + ev.data);
    // connection.innerText = "Erro: " + ev.data;
    // connection.style.color = "yellow";

    // status.style.background = "yellow";
  }



 ws.onclose = function () {
    // connection.innerText = "Desconectado";
    // connection.style.color = "red";

    // status.style.background = "red";
    alert("Erro: conexao fechada");

    //Tentar reconectar o WebSocket a cada 1 segundo
    // setTimeout(function () {
    //   Connect();
    // }, 1000);
    // isConnected = false;
  }





//   ws.onmessage = function (ev) {
//     console.log(ev.data)

//     // if (ev.data.toString() === "__pong__") {
//     //   Pong();
//     //   return;
//     // }

//   }




