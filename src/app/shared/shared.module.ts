import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LodingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations:[
    LodingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    ],
    imports:[
        CommonModule
    ],
    providers:[LoggingService],
    exports:[
    LodingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    ],
    entryComponents:[
        AlertComponent
      ]
})

export class SharedModule{

}