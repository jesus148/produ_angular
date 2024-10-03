
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

// decorado
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

// clase
export class MainPageComponent {





  // inicia
  // podemos usara toda la info del servicio DbzService en este componente
  // puede ponerlo como publico pero es una buena practica ponerlo en privado
  constructor(private DbzService : DbzService){

  }




  // estos metodos usamos pq el servicio es privado x eso los metodos seran publicos y el servicio privado

  // metodo get
  // metodo teniendo acceso al listado del  usamos esto pq arriba el service es private
  get characters(): Character[]{
    // creando una copia del listado
    return [...this.DbzService.Character ]
  }



  // metodo eliminar
  onDeleteCharacter( id: string):void{
    this.DbzService.onDeleteCharacter(id);
  }


  // metodo agregar un character
  onNewCharacter( character: Character):void{
    this.DbzService.onNewCharacter(character);
  }





// TODO ESTE CODIGO LO USAREMOS EN EL SERVICE > dbz.service.ts
//   //no usar any ,si no poner un tipo de dato
//   public Character: Character[] = [{
//     name: 'goku' , power: 1000
//   },
//  {
//   name:'jesus' , power:400
//  }, {
//   name:'bills' , power:400
//  }];



//   constructor() { }
//   ngOnInit() { }




//   // obteniendo la data del form del componente add.Component
//   onNewCharacter(character : Character):void{
//     // console.log("main page");
//     // console.log(character);

//     // la data obtenida del form add.component se registra y se agrega al arreglo de arriba
//     this.Character.push(character);
//   }



//   // eliminado un elemento del array del arriba
//   onDeleteCharacter( index: number){
//     // eliminando
//     // splice(index , 1): eliminado de la posicion index solo 1 elemento en adelante
//     this.Character.splice(index , 1);
//   }


}
