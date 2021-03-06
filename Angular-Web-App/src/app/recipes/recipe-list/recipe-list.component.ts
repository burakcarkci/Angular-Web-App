import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
