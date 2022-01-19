import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "personas",
    loadChildren: () => import('./screens/personas/personas.module').then( m => m.PersonasModule)
  },
  {
    path: "",
    redirectTo: "personas",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
