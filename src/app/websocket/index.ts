class Socket {

  private instance: WebSocket;

  public onOpen: () => void;
  public onClose: () => void;
  public onMessage: (message: any) => void;
  public onError: () => void;

  constructor(url: string) {
    this.instance = new WebSocket(url);
    this.instance.onopen = () => {
      this.onOpen();
    };
    this.instance.onmessage = (value: any) => {
      this.onMessage(value);
    };
    this.instance.onclose = () => {
      this.onClose();
    };
    this.instance.onerror = () => {
      this.onError();
    };
  }

  public send(message: string): void {
    this.instance.send(message);
  }
}

export const webSocketExample = () => {
  const socket = new Socket('wss://javascript.info/article/websocket/demo/hello');
  socket.onOpen = () => {
    console.log('connection set');
  };
  socket.onMessage = value => {
    console.log(value);
  };
  socket.send('hello');
};
