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
import { AddCityComponent } from './districts/add-city/add-city.component';
import { EditCityComponent } from './districts/edit-city/edit-city.component';
import { ListCityComponent } from './districts/list-city/list-city.component';
import { ListDistrictsComponent } from './districts/list-districts/list-districts.component';
import { EditDistrictComponent } from './districts/edit-district/edit-district.component';
import { CreateParentCategoryComponent } from './categories/create-parent-category/create-parent-category.component';
import { ListParentCategoryComponent } from './categories/list-parent-category/list-parent-category.component';
import { EditParentCategoryComponent } from './categories/edit-parent-category/edit-parent-category.component';
import { SubCategoryComponent } from './categories/sub-category/sub-category.component';
import { ListSubcategoryComponent } from './categories/list-subcategory/list-subcategory.component';
import { EditSubcategoryComponent } from './categories/edit-subcategory/edit-subcategory.component';
import { EditAdComponent } from './ad/edit-ad/edit-ad.component';
import { ListAdAdminComponent } from './ad/list-ad-admin/list-ad-admin.component';
import { AddAdTypeComponent } from './ad/add-ad-type/add-ad-type.component';
import { EditAdTypeComponent } from './ad/edit-ad-type/edit-ad-type.component';
import { ListAdTypeComponent } from './ad/list-ad-type/list-ad-type.component';

const routes: Routes = [
  { component: DashboardComponent, path: 'admin' },
  { component: CreateParentCategoryComponent, path: 'parentCategories/add' },
  { component: ListParentCategoryComponent, path: 'parentCategories/list' },
  { component: EditParentCategoryComponent, path: 'parentCategories/edit/:id' },
  { component: SubCategoryComponent, path: 'subCategories/add' },
  { component: ListSubcategoryComponent, path: 'subCategories/list' },
  { component: EditSubcategoryComponent, path: 'subCategories/edit/:id' },
  { component: CreateDistrictComponent, path: 'district/add' },
  { component: ListDistrictsComponent, path: 'district/list' },
  { component: EditDistrictComponent, path: 'district/edit/:id' },
  { component: AddCityComponent, path: 'city/add' },
  { component: ListCityComponent, path: 'city/list' },
  { component: EditCityComponent, path: 'city/edit/:id' },
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
  { component: CreateAdComponent, path: 'ad/create' },
  { component: EditAdComponent, path: 'ads/edit/:id' },
  { component: ListAdAdminComponent, path: 'ads/list' },
  { component: AddAdTypeComponent, path: 'adType/add' },
  { component: EditAdTypeComponent, path: 'adType/edit/:id' },
  { component: ListAdTypeComponent, path: 'adType/list' },
  { component: AboutComponent, path: 'about' },
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
  { component: ContactComponent, path: 'contact' },
  { component: ShopComponent, path: 'shop' },
  { component: UserProfileComponent, path: 'me' },
  { component: HomeWelcomeComponent, path: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
