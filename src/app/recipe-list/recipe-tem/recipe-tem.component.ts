import { Component,Input, OnInit} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-tem',
  templateUrl: './recipe-tem.component.html',
  styleUrls: ['./recipe-tem.component.css']
})
export class RecipeTemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: Number;
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  
}
