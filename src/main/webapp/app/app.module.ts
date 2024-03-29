import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PsychoSharedModule } from 'app/shared/shared.module';
import { PsychoCoreModule } from 'app/core/core.module';
import { PsychoAppRoutingModule } from './app-routing.module';
import { PsychoHomeModule } from './home/home.module';
import { PsychoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PsychoSharedModule,
    PsychoCoreModule,
    PsychoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PsychoEntityModule,
    PsychoAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class PsychoAppModule {}
