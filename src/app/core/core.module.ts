import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ContainerComponent,
    ContentComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ContainerComponent],
})
export class CoreModule {}
