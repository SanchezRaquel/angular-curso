import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
 declarations:[
  HeroComponent,
  ListComponent,
 ],
 exports:[
  HeroComponent,
  ListComponent,
 ],
 imports:[
  CommonModule
 ]
}
)
export class heroesModule {

}
