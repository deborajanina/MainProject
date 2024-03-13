import { Component } from '@angular/core';

@Component({
  selector: 'app-working-with-custom-pipes',
  templateUrl: './working-with-custom-pipes.component.html',
  styleUrls: ['./working-with-custom-pipes.component.css']
})
export class WorkingWithCustomPipesComponent {

  // asyncVariable = new Promise(resolve => {setTimeout() => resolve(value:'Angular resolved'),timeout: 2000});

  filterStatus: string = '';

  angClasses = [{ name: 'Angular Q1 class group 2', type: 'in Class', status: 'started', started: new Date(2024, 0, 30) },
  { name: 'Angular Q2 class group 1', type: 'online', status: 'not started', started: new Date(2024, 5, 30) },
  { name: 'Angular Q2 class group 2', type: 'in Class', status: 'not started', started: new Date(2024, 5, 25) },];

  onAddNewClass(){
    this.angClasses.push({name: 'new added: Angular Q3 class group', type: 'in Class', status: 'started', started: new Date(2024, 5, 25) });
  }

}