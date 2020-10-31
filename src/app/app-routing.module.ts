import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './components/pages/cats/cats.component';
import { FormComponent } from './components/pages/form/form.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

const routes: Routes = [
  {path:"form", component:FormComponent},
  {path:"cats", component:CatsComponent},
  {path:"404", component:NotfoundComponent},
  {path:"**", redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
