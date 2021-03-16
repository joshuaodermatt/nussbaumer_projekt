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
  checkedData: boolean;

  @Input() description: string;

  @Input() id: any;

  @Input() answer: string;

  input: string;

  constructor(public validatioserivice : ValidationService, public requestservice : RequestService) { }

  ngOnInit() {}

  async submit(){
    this.requestservice.request(this.input,this.answer);
  }

}
