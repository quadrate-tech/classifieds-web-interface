import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPaymentComponent} from './payments/add-payment/add-payment.component';
import {ListPaymentComponent} from './payments/list-payment/list-payment.component';
import {EditPaymentComponent} from './payments/edit-payment/edit-payment.component';
import { CreateParentCategoryComponent } from './create-parent-category/create-parent-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { UserComponent } from './user/user.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import {AddPromotionComponent} from './promotion/add-promotion/add-promotion.component';
import {ListPromotionComponent} from './promotion/list-promotion/list-promotion.component';
import {EditPromotionComponent} from './promotion/edit-promotion/edit-promotion.component';
import {PromotionAdDetailsEditComponent} from './promotion-ad-details/promotion-ad-details-edit/promotion-ad-details-edit.component';
import {PromotionAdDetailsComponent} from './promotion-ad-details/promotion-ad-details.component';


const routes: Routes = [
  {component: AddPaymentComponent, path: 'payment/add' },
  {component: ListPaymentComponent, path: 'payment/list'},
  {component: EditPaymentComponent, path: 'payment/edit/:id'},
  {component: AddPromotionComponent, path: 'promotion/add'},
  {component: ListPromotionComponent, path: 'promotion/list'},
  {component: EditPromotionComponent, path: 'promotion/edit/:id'},
  {component: PromotionAdDetailsComponent, path: 'promotedAd'},
  {component: PromotionAdDetailsEditComponent, path: 'promotedAd/add'},
  {component: PromotionAdDetailsEditComponent, path: 'promotedAd/edit/:id'},
  {path: '', component: UserComponent},
  {path: 'me/subCategory', component: SubCategoryComponent},
  {path: 'me/ad', component: CreateAdComponent},
  {path: 'me/parentCategory', component: CreateParentCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
