import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateDistrictComponent } from './districts/create-district/create-district.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaymentsModule } from './payments/payments.module';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { CityService } from './services/city.service';
import { AdTypeService } from './services/ad-type.service';
import { SubCategoryService } from './services/sub-category.service';
import { PromotionModule } from './promotion/promotion.module';
import { HomeModule } from './home/home.module';
import { AdModule } from './ad/ad.module';
import { DistrictsModule } from './districts/districts.module';
import { CategoriesModule } from './categories/categories.module';
import { AdminModule } from './admin/admin.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AdminModule,
    UserModule,
    HomeModule,
    DistrictsModule,
    AdModule,
    CategoriesModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PaymentsModule,
    PromotionModule,
    HttpClientModule,
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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
  ],
  providers: [CityService, AdTypeService, SubCategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
