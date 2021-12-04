import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NotesComponent } from './components/notes/notes.component';
import { MemoriesComponent } from './components/memories/memories.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotesComponent,
    MemoriesComponent,
    AboutComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
