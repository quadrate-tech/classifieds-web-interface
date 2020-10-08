import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDistrictComponent } from './create-district/create-district.component';
import { EditDistrictComponent } from './edit-district/edit-district.component';
import { ListDistrictsComponent } from './list-districts/list-districts.component';
import { AddCityComponent } from './add-city/add-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { ListCityComponent } from './list-city/list-city.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    CreateDistrictComponent,
    EditDistrictComponent,
    ListDistrictsComponent,
    AddCityComponent,
    EditCityComponent,
    ListCityComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
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
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
  ],
  exports: [
    CreateDistrictComponent,
    EditDistrictComponent,
    ListDistrictsComponent,
    AddCityComponent,
    EditCityComponent,
    ListCityComponent,
  ],
})
export class DistrictsModule {}
