import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateDistrictComponent } from './create-district/create-district.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PromotionAdDetailsComponent } from './promotion-ad-details/promotion-ad-details.component';
import { PromotionComponent } from './promotion/promotion.component';
import {PaymentsModule} from './payments/payments.module';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import { CreateParentCategoryComponent } from './create-parent-category/create-parent-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { UserComponent } from './user/user.component';
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
import { AdTypeComponent } from './ad-type/ad-type.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import {CityService} from './services/city.service';
import {AdTypeService} from './services/ad-type.service';
import {SubCategoryService} from './services/sub-category.service';

@NgModule({
  declarations: [
    AppComponent,
    AdTypeComponent,
    CreateDistrictComponent,
    PromotionAdDetailsComponent,
    PromotionComponent,
    CreateParentCategoryComponent,
    UserComponent,
    CreateAdComponent,
    SubCategoryComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaymentsModule,
    HttpClientModule,
    ReactiveFormsModule,
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

