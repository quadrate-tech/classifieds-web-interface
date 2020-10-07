import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageDistrictsComponent } from './manage-districts/manage-districts.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageAdApprovalsComponent } from './manage-ad-approvals/manage-ad-approvals.component';
import { UserModule } from '../user/user.module';
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
  declarations: [
    DashboardComponent,
    ManageUsersComponent,
    ManageDistrictsComponent,
    ManageCategoriesComponent,
    ManageAdApprovalsComponent,
  ],
  imports: [
    CommonModule,
    UserModule,
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
    ManageAdApprovalsComponent,
  ],
})
export class AdminModule {}
