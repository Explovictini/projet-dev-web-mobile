import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonItemComponent } from './pokemon-page/pokemon-item/pokemon-item.component';
import { StratPageComponent } from './strat-page/strat-page.component';
import { StratPokemonComponent } from './strat-page/strat-pokemon/strat-pokemon.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    PokemonPageComponent,
    PokemonItemComponent,
    StratPageComponent,
    StratPokemonComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
