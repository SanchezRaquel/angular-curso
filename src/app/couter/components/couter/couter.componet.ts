import { Component } from "@angular/core";




@Component({
  selector:'app-couter' ,
  template: `<h3>Couter: {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  ` ,
})
export class CouterComponent{
 public counter: number=10;

 increaseBy(value:number):void{
  this.counter+=value;
 }

 resetCounter(){
  this.counter=10;
 }

}
