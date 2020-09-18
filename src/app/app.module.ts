import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionAdDetailsComponent } from './promotion-ad-details/promotion-ad-details.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AdTypeComponent } from './ad-type/ad-type.component';

@NgModule({
  declarations: [
    AppComponent,
    PromotionAdDetailsComponent,
    PromotionComponent,
    AdTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
