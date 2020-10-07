import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { ListAdComponent } from './list-ad/list-ad.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [CreateAdComponent, EditAdComponent, ListAdComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
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
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
  ],
  exports: [CreateAdComponent, EditAdComponent, ListAdComponent],
})
export class AdModule {}
