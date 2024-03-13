import { Component } from '@angular/core';
import { RecipeListModel } from './models/recipe-list.model';


@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
  dataToShow: { name: string, surname: string } = { name: '', surname: '' };

  recipes: RecipeListModel[] = [
    {name: 'Recipe1', description: 'Some text for description', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'},
    {name: 'Recipe2', description: 'Some text for Recipe 2', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'},
  ];

  addNewRecipe(recipe: RecipeListModel) {
    console.log(recipe, "Recipe");
    this.recipes.push(recipe);
  }

  onAddNewClicked(data: { name: string, surname: string }) {
    console.log(data);
    this.dataToShow = data;
  }
}
