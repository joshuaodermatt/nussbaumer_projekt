import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ValidationService } from '../validation/validation.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(public http: HttpClient, public validationservice: ValidationService) {}

  request(input: string){
     this.http.get('https://42217.wayscript.io/?request=' + input).subscribe(data => {
      console.log(data);
      this.validationservice.check_data();
    })
    
  }
}
