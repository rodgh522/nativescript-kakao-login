import { Observable } from '@nativescript/core/data/observable';
export class Common extends Observable {
  message;

  constructor() {
    super();
  }

  greet() {
    return "Hello, NS";
  }
}
