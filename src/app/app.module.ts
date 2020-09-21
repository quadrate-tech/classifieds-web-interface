import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PromotionAdDetailsComponent } from './promotion-ad-details/promotion-ad-details.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CitiesComponent } from './cities/cities.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { CityService } from './services/city.service';
import { AdTypeService } from './services/ad-type.service';
import { SubCategoryService } from './services/sub-category.service';


@NgModule({
  declarations: [
    AppComponent,
    PromotionAdDetailsComponent,
    PromotionComponent,
    CitiesComponent
    CreateAdComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule],
  providers: [CityService, AdTypeService, SubCategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
