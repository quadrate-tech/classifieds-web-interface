import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPromotionComponent } from './edit-promotion/edit-promotion.component';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PromotionAdDetailsComponent } from './promotion-ad-details/promotion-ad-details.component';
import { PromotionAdDetailsEditComponent } from './promotion-ad-details-edit/promotion-ad-details-edit.component';
@NgModule({
  declarations: [
    PromotionAdDetailsComponent,
    PromotionAdDetailsEditComponent,
    EditPromotionComponent,
    ListPromotionComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditPromotionComponent,
    ListPromotionComponent,
    PromotionAdDetailsComponent,
    PromotionAdDetailsEditComponent,
  ],
})
export class PromotionModule {}
