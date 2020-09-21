import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PromotionAdDetailsComponent } from './promotion-ad-details/promotion-ad-details.component';
import { PromotionComponent } from './promotion/promotion.component';
import { UserComponent } from './user/user.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdTypeComponent } from './ad-type/ad-type.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { CityService } from './services/city.service';
import { AdTypeService } from './services/ad-type.service';
import { SubCategoryService } from './services/sub-category.service';


@NgModule({
  declarations: [
    AppComponent,
    PromotionAdDetailsComponent,
    PromotionComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
    CreateAdComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule],
  providers: [CityService, AdTypeService, SubCategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
