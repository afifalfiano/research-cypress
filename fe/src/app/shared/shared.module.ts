import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTreeModule } from '@angular/cdk/tree';
// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatFormFieldModule, MatButtonToggleModule, MatTreeModule, MatProgressBarModule, MatGridListModule, MatDialogModule } from '@angular/material';
import { OverviewDetailComponent } from './overview-detail/overview-detail.component';
import { ApiService } from './services/api.service';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { LayoutModule } from '@angular/cdk/layout';


const materialModules = [
  CdkTreeModule,
  MatDialogModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatSidenavModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  FormsModule,
  ReactiveFormsModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
];


@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules
  ],
  providers: [ApiService],
  entryComponents: [DetailDataComponent, OverviewDetailComponent],
  declarations: [OverviewDetailComponent, DetailDataComponent]
})
export class SharedModule { }
