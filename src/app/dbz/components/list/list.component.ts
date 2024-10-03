import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  // este valor es por defecto
  // aca recibimos data de otro componente que es main-page
  @Input()
  public characterList : Character[] =[{
      // estos datos son si no se recibe nada
    name: 'wendy' , power: 0
  }]





  // esto es salida osea esto es para exportar la data o valores de este componente a otro componente
  // enviaremos el id de un elemento de este componente al componente main-page
 @Output()
 public onDelete : EventEmitter<string> = new EventEmitter();





  // metodo para eliminar
  onDeleteCharacter(id? : string):void{

    if(!id) return ;

    console.log({id});
          // exportando al main-page.component el id obtenida del form
          this.onDelete.emit( id) ;
  }



}
