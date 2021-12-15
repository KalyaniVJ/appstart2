import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is a simple test','https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg'),
    new Recipe('Another Test Recipe','This is a simple test','https://www.warmoven.in/media/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/14583601/smash-cake-customizable.jpg'),
  ];
  
  constructor() { }

  ngOnInit(){
    
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
