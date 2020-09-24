import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddPromotionComponent} from './add-promotion/add-promotion.component';
import {EditPromotionComponent} from './edit-promotion/edit-promotion.component';
import {ListPromotionComponent} from './list-promotion/list-promotion.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AddPromotionComponent,
    EditPromotionComponent,
    ListPromotionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PromotionModule { }
