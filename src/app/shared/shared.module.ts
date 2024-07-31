import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SitebarComponent,
    HeaderComponent,
    
  ],
  exports: [
    BreadcrumbsComponent,
    SitebarComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
