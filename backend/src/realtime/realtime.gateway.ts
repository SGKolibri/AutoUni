import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: process.env.CLIENT_URL || 'http://localhost:3000' },
})
export class RealtimeGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  afterInit() {
    // optional logging
  }

  emitDeviceUpdate(payload: any) {
    this.server.emit('device:update', payload);
  }
}
