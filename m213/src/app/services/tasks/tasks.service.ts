import { Injectable } from '@angular/core';

const tasks = [
  {
    "id": 0,
    "description": 'geben sie alle Einträge der Tabelle bla bla zurück',
    "answer": 'bla bla'
  },
  {
    "id": 1,
    "description": 'geben sie alle Einträge der Tabelle bla bla zurück',
    "answer": 'bla bla'
  },
  {
    "id": 2,
    "description": 'geben sie alle Einträge der Tabelle bla bla zurück',
    "answer": 'bla bla'
  },
  {
    "id": 3,
    "description": 'geben sie alle Einträge der Tabelle bla bla zurück',
    "answer": 'bla bla'
  }
];

@Injectable({
  providedIn: 'root'
})




export class TasksService {

  getTasks(){
    return tasks;
  }

  constructor() { }
}
