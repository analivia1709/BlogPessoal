import{InicioComponent} from './inicio/inicio.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastarComponent } from './cadastar/cadastar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [

  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastarComponent },
  { path: 'inicio', component: InicioComponent },
  {path: 'tema',component: TemaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
