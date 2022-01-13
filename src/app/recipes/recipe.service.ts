import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
// private recipes:Recipe[]=[
//     new Recipe(
//         'Dhokla',
//         'what else you need to say?',
//         'https://punampaul.com/wp-content/uploads/2018/05/gujarati-dhokla-recipe.jpg',
//         [
//             new Ingredient('kadhi',1),
//             new Ingredient('undhio',2)
//         ]),
//     new Recipe(
//         'GulabJam',
//         'what else you need to say?',
//         'https://4.imimg.com/data4/CE/RC/IMOB-36751175/images1-500x500.jpg',
//         [
//             new Ingredient('samosa',1),
//             new Ingredient('kachori',2)  
//         ]),
  
//         ];
private recipes:Recipe[]=[];
        constructor(private slService:ShoppingListService){}
        setRecipes(recipes:Recipe[]){
            this.recipes=recipes;
            this.recipesChanged.next(this.recipes.slice());
        }
        getRecipes(){
        return this.recipes.slice();
        }
        getRecipe(index:number)
        {
            return this.recipes[index];
        }
        addIngredientsToShoppingListComponent(ingredients:Ingredient[])
        {
        this.slService["addIngredients"](ingredients);
        }
        addRecipe(recipe:Recipe){
            this.recipes.push(recipe);
            this.recipesChanged.next(this.recipes.slice());
        }
        updateRecipe(index:number,newRecipe:Recipe){
            this.recipes[index]=newRecipe;
            this.recipesChanged.next(this.recipes.slice());
        }
        deleteRecipe(index:number){
            this.recipes.splice(index,1);
            this.recipesChanged.next(this.recipes.slice());
        }
}