import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// componentes
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';



// decorador
@NgModule({
  // para q uses componentes dentro de otros componentes
  declarations: [
    MainPageComponent,
    ListComponent,
    AddComponent
  ],
  // para importar el poder de angular
  imports: [
    CommonModule,
    FormsModule
  ],
  // exportar el componente pa usar afuera
  exports:[
    MainPageComponent
  ],

})

// clase
export class DbzModule { }
