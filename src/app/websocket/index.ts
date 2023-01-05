export class WebSocketExample {
  constructor() {
    const socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello');
    socket.onopen = event => {
      console.log(event);
    };
    socket.onmessage = (event) => {
      alert(`Message: ${event.data}`);
    };
    socket.onclose = () => {
      console.log('close');
    };
    socket.onerror = () => {
      console.log('error');
    };
  }
}
