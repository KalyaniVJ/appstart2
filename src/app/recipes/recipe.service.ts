import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
private recipes:Recipe[]=[
    new Recipe(
        'Rasgulla',
        'what else you need to say?',
        'https://c.ndtvimg.com/2019-12/rt2n8olg_rasgulla_625x300_04_December_19.jpg',
        [
            new Ingredient('pieces',1),
            new Ingredient('pedha',2)
        ]),
    new Recipe(
        'Samosa',
        'what else you need to say?',
        'https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-1.jpg',
        [
            new Ingredient('kadhi',1),
            new Ingredient('chutney',2)  
        ]),
  
        ];
        constructor(private slService:ShoppingListService){}
        getRecipes(){
        return this.recipes.slice();
        }
    addIngredientsToShoppingListComponent(ingredients:Ingredient[]){
        this.slService["addIngredients"](ingredients);
    }
}