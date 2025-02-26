import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/wheater/page/home/home.component';

const routes: Routes = [
  {
    path:'',//quando acessamos o caminho estar vazio
    redirectTo: 'weather',//vá para weather
    pathMatch:'full'
  },
  //cria a rota weather
  {
    path:'weather',//nome do project
    component:HomeComponent,//componet exibirdo
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
