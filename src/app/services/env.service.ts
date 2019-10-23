import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {


  API_URL = 'https://fjoerde.herokuapp.com/login';


  constructor() { }
}
