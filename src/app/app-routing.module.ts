import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentComponent } from './payments/add-payment/add-payment.component';
import { ListPaymentComponent } from './payments/list-payment/list-payment.component';
import { EditPaymentComponent } from './payments/edit-payment/edit-payment.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { CreateAdComponent } from './ad/create-ad/create-ad.component';
import { ListAdComponent } from './ad/list-ad/list-ad.component';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { ListPromotionComponent } from './promotion/list-promotion/list-promotion.component';
import { EditPromotionComponent } from './promotion/edit-promotion/edit-promotion.component';
import { PromotionAdDetailsEditComponent } from './promotion/promotion-ad-details-edit/promotion-ad-details-edit.component';
import { PromotionAdDetailsComponent } from './promotion/promotion-ad-details/promotion-ad-details.component';
import { HomeWelcomeComponent } from './home/home-welcome/home-welcome.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ContactComponent } from './home/contact/contact.component';
import { ShopComponent } from './home/shop/shop.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreateDistrictComponent } from './districts/create-district/create-district.component';
const routes: Routes = [
  { component: DashboardComponent, path: 'admin' },
  { component: CreateDistrictComponent, path: 'district/add' },
  // { component: ListPaymentComponent, path: 'district/list' },
  // { component: EditPaymentComponent, path: 'district/edit/:id' },
  { component: AddPaymentComponent, path: 'payment/add' },
  { component: ListPaymentComponent, path: 'payment/list' },
  { component: EditPaymentComponent, path: 'payment/edit/:id' },
  { component: AddPromotionComponent, path: 'promotion/add' },
  { component: ListPromotionComponent, path: 'promotion/list' },
  { component: EditPromotionComponent, path: 'promotion/edit/:id' },
  { component: PromotionAdDetailsComponent, path: 'promotedAd' },
  { component: PromotionAdDetailsEditComponent, path: 'promotedAd/add' },
  { component: PromotionAdDetailsEditComponent, path: 'promotedAd/edit/:id' },
  { component: AddUserComponent, path: 'users/add' },
  { component: ListUsersComponent, path: 'users/list' },
  { component: EditUserComponent, path: 'users/edit/:id' },
  { component: ListAdComponent, path: 'ads/:id' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  // { path: 'me/subCategory', component: SubCategoryComponent },
  { path: 'ad/create', component: CreateAdComponent },
  // { path: 'me/parentCategory', component: CreateParentCategoryComponent },
  { path: 'me', component: UserProfileComponent },
  { path: 'home', component: HomeWelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
