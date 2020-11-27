import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'editor',loadChildren:()=>import('./editor/editor.module').then(m=>m.EditorModule)},
  {path:'lazy',loadChildren:()=>import('./lazy/lazy.module').then(m=>m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
