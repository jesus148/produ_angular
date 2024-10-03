


// a-serv
// escribe esto y se autcompleta es un snipper


import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
// es para usar o poner los id osea para que sean unicos
import {v4 as uuid} from 'uuid';


// decordador q le dice que es un servicio
@Injectable({
  // le dice q es un servicio para usar en toda el proyecto la data actual de este service
  providedIn: 'root'}
)

// son simples clases
export class DbzService {



// TODO ESTE CODIGO LO USAREMOS EN EL SERVICE > dbz.service.ts
  //no usar any ,si no poner un tipo de dato
  public Character: Character[] = [{
    // id:uuid() //valor unico
   id:uuid() ,name: 'goku' , power: 1000
  },
 {
  id:uuid() ,name:'jesus' , power:400
 }, {
  id:uuid() ,name:'bills' , power:400
 }];



  constructor() { }
  ngOnInit() { }




  // obteniendo la data del form del componente add.Component
  onNewCharacter(character : Character):void{
    // console.log("main page");
    // console.log(character);

    // agregando la data obtenida el id para q sea unico
    // const newCharacter : Character={
    //   id:uuid(),
    //   name:character.name ,
    //   power : character.power,
    // }

    // es lo mismo de arriab pero mas simple
    // agrea el id a todos los campos del character
    const newCharacter : Character ={id:uuid(), ...character}



    // la data obtenida del form add.component se registra y se agrega al arreglo de arriba
    this.Character.push(newCharacter);
  }







  // eliminado un elemento del array del arriba
  // onDeleteCharacter( index: number){
  //   // eliminando
  //   // splice(index , 1): eliminado de la posicion index solo 1 elemento en adelante
  //   this.Character.splice(index , 1);
  // }


  // eliminado de una mejore manera lo mismo de arriba
    // eliminado un elemento del array del arriba
  onDeleteCharacter( id: string){
    // eliminando
    // splice(index , 1): eliminado de la posicion index solo 1 elemento en adelante
    // reasigna y filtra los id q sean diferentes
    this.Character = this.Character.filter( character => character.id !== id );
  }






}
