import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-tem',
  templateUrl: './recipe-tem.component.html',
  styleUrls: ['./recipe-tem.component.css']
})
export class RecipeTemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeSelected.emit();
  }
}
