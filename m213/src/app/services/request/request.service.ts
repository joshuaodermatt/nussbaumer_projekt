import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ValidationService } from '../validation/validation.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(public http: HttpClient) {}

  request(input: string): any{
    this.http.get('https://42217.wayscript.io/?request=' + input).subscribe(data => {
      console.log(data);
      return data;
    });
  }
}
