import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { ListAdComponent } from './list-ad/list-ad.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateAdComponent, EditAdComponent, ListAdComponent],
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  exports: [CreateAdComponent, EditAdComponent, ListAdComponent],
})
export class AdModule {}
