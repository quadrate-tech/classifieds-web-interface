import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:UserComponent}

import { CreateAdComponent } from './create-ad/create-ad.component';
const routes: Routes = [
  {
    path: 'me/ad',
    component: CreateAdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
