import { OnInit } from '@angular/core';
import { ToDoService } from './todo-service';

export class ToDoComponent implements OnInit{
toDo = [];
constructor(private srevice: ToDoService){}

ngOnInit(){
    this.srevice.getProviderList().subscribe(res =>  this.toDo = res);
}
}