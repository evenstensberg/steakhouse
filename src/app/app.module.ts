import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaroselComponent } from './carosel/carosel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoNavbarComponent } from './logo-navbar/logo-navbar.component';
import { InformationSectionComponent } from './information-section/information-section.component';
import { MenuShortcutsComponent } from './menu-shortcuts/menu-shortcuts.component';
import { AllergiesSectionComponent } from './allergies-section/allergies-section.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { MenuItemWithDescriptionComponent } from './menu-item-with-description/menu-item-with-description.component';
import { MenuItemSimpleComponent } from './menu-item-simple/menu-item-simple.component';
import { SubMenuTitleComponent } from './sub-menu-title/sub-menu-title.component';
import { SubMenuListComponent } from './sub-menu-list/sub-menu-list.component';
import { SteakExtrasComponent } from './steak-extras/steak-extras.component';
import { ScrollUpSectionComponent } from './scroll-up-section/scroll-up-section.component';
import { PromotionSectionComponent } from './promotion-section/promotion-section.component';

@NgModule({
  declarations: [AppComponent, CaroselComponent, NavbarComponent, LogoNavbarComponent, InformationSectionComponent, MenuShortcutsComponent, AllergiesSectionComponent, MenuTitleComponent, MenuItemWithDescriptionComponent, MenuItemSimpleComponent, SubMenuTitleComponent, SubMenuListComponent, SteakExtrasComponent, ScrollUpSectionComponent, PromotionSectionComponent],
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
