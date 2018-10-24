import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuBarComponent
  ],
  declarations: [MenuBarComponent, MenuItemComponent]
})
export class MenuModule { }
