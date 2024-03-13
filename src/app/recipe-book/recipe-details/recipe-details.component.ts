import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeListModel } from '../models/recipe-list.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Output() recipe = new EventEmitter<RecipeListModel>();
  
  name = "";
  description = "";
  imageUrl = "";

  addInput() {
    console.log(this.name);
    console.log(this.description);
    console.log(this.imageUrl);
    this.recipe.emit({name: this.name, description: this.description, imageUrl: this.imageUrl});
  }

}
