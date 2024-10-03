import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';




// MODULO GENERAL DE ANGULAR

// decorador
@NgModule({
  // pa usar sobre otros componentes
  declarations: [
    AppComponent
  ],
  // importaciones de componentes de afuera y potenciar angular
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  // servicios rest
  providers: [],
  // componente principal
  bootstrap: [AppComponent]
})
// clase
export class AppModule { }
