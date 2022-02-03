import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecipeTemComponent } from "../recipe-list/recipe-tem/recipe-tem.component";
import { SharedModule } from "../shared/shared.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeTemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports:[
            [
                RouterModule,
                SharedModule,
                ReactiveFormsModule,
                RecipeRoutingModule
            ],
    ],
  
})
export class RecipesModule{

}