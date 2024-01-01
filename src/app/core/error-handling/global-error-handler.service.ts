import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.error('An unexpected error occurred:', error);

    this.logErrorToServer(error);
  }

  private logErrorToServer(error: any): void {
  }
}
