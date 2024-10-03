import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  // id del component
  // selector: 'dbz-add-form', : pq dbz es otro componente
  // osea para diferenciar componentes
  selector: 'dbz-add-form',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {




  // esto es salida osea esto es para exportar la data o valores de este componente a otro componente
 @Output()
 public onNewCharacter : EventEmitter<Character> = new EventEmitter();


  // objeto clase guia
    public character : Character ={
      name :  '',
      power : 0
    }


    // imprime en consola
    emitCharatcer(): void{

      // esto es para debugear osea el codigo para aca es como el puntito rojo
      // o tambien puedes usar desde el navegado usando el .ts para debugear
      // debugger;

      console.log(this.character);

      // validacion
      if(this.character.name.length === 0) return ;


      // exportando al main-page.component la data obtenida del form
      this.onNewCharacter.emit(this.character);

      // resetea los valores
      this.character = { name: '', power: 0 };
    }


}
