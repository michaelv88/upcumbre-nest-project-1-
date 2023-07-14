import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  filservices(): string {
    return 'Hola Mundo!';
  }

  fileServicesPost(){
    return 'Hello World!'
  }
}
