import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContainerComponent,
    ContentComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [ContainerComponent],
})
export class CoreModule {}
