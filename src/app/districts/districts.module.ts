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
import { CitiesComponent } from './cities/cities.component';
import { CreateDistrictComponent } from './create-district/create-district.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CitiesComponent, CreateDistrictComponent],
  imports: [
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
  exports: [CitiesComponent, CreateDistrictComponent],
})
export class DistrictsModule {}
