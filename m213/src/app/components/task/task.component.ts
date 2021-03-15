import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { RequestService } from 'src/app/services/request/request.service';
import { ValidationService } from 'src/app/services/validation/validation.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  validation = 0;

  input: string;

  @Input() description: string;

  @Input() id: any;

  constructor( public validationService: ValidationService) { }

  ngOnInit() {}


  async submit($event){
    this.validationService.check_data(this.input, this.id);
  }

}
