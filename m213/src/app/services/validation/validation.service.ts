import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service';
import {TasksService} from '../tasks/tasks.service';


@Injectable({
  providedIn: 'root'
})



export class ValidationService {



  constructor(private request: RequestService, private tasksService: TasksService) { }

  check_data(requestStatement: string, taskId): boolean{
    // requesting from entered statement
    const resEntered = this.request.request(requestStatement);

    const task = this.tasksService.getTask(taskId);

    // requesting from correct statement
    const resCorrect = this.request.request(task.answer);

    if ( JSON.stringify(resEntered) === JSON.stringify(resCorrect)) {
      return true;
    }

    return false;
  }
}
