import { Component } from '@angular/core';

@Component({
  selector: 'app-working-with-custom-directives',
  templateUrl: './working-with-custom-directives.component.html',
  styleUrls: ['./working-with-custom-directives.component.css']
})
export class WorkingWithCustomDirectivesComponent {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  oddNumbers: number[] = [1, 3, 5, 7];
  evenNumbers: number[] = [2, 4, 6];

  onlyOdd: boolean = false;

}
