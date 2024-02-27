import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addchacter',
  templateUrl: './addchacter.component.html',
  styleUrls: ['./addchacter.component.css']
})
export class AddchacterComponent {
@Output()
onNewCharacter:EventEmitter<character>=new EventEmitter();


  public character: character ={
    name:'',
   power: 0
  };
emitCharacter():void{

if(this.character.name.length===0)return;

this.onNewCharacter.emit(this.character);

this.character={name:'', power: 0};


}

}
