import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageDistrictsComponent } from './manage-districts/manage-districts.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { UserModule } from '../user/user.module';
import { PaymentsModule } from '../payments/payments.module';
import { ManagePaymentsComponent } from './manage-payments/manage-payments.component';
import { ManagePromotionComponent } from './manage-promotion/manage-promotion.component';
import { ManagePromotionAdDetailsComponent } from './manage-promotion-ad-details/manage-promotion-ad-details.component';
import { ManageAdComponent } from './manage-ad/manage-ad.component';
import { ManageSubcategoriesComponent } from './manage-subcategories/manage-subcategories.component';
import { PromotionModule } from '../promotion/promotion.module';
import { DistrictsModule } from '../districts/districts.module';
import { ManageCitiesComponent } from './manage-cities/manage-cities.component';
import { CategoriesModule } from '../categories/categories.module';
import { AdModule } from '../ad/ad.module';
import { ManageAdTypesComponent } from './manage-ad-types/manage-ad-types.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ManageUsersComponent,
    ManageDistrictsComponent,
    ManageCategoriesComponent,
    ManagePaymentsComponent,
    ManagePromotionComponent,
    ManagePromotionAdDetailsComponent,
    ManageAdComponent,
    ManageSubcategoriesComponent,
    ManageCitiesComponent,
    ManageAdTypesComponent,
  ],
  imports: [
    AdModule,
    CategoriesModule,
    DistrictsModule,
    PromotionModule,
    CommonModule,
    UserModule,
    PaymentsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
  ],
  exports: [
    DashboardComponent,
    ManageUsersComponent,
    ManageDistrictsComponent,
    ManageCategoriesComponent,
  ],
})
export class AdminModule {}
