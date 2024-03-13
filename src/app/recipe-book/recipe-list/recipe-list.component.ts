import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeListModel} from "../models/recipe-list.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes!: RecipeListModel[];
  // @Output() addNew = new EventEmitter<{name: string, surname:string}>();

  // recipes: RecipeListModel[] = [
  //   {name: 'Recipe1', description: 'Some text for description', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'},
  //   {name: 'Recipe2', description: 'Some text for Recipe 2', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'},
  // ];

  addRecipe() {
  //   this.addNew.emit({name: 'Ikub', surname: 'Info'});
  }
 
}
