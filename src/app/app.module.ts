import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CouterModule } from './couter/counter.module';
import { heroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , CouterModule, heroesModule, DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
