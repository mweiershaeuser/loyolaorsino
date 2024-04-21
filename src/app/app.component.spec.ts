import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './core/container/container.component';
import { ContentComponent } from './core/content/content.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MenuComponent } from './core/menu/menu.component';
import { SectionComponent } from './shared/components/section/section.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        HeaderComponent,
        MenuComponent,
        ContentComponent,
        FooterComponent,
        SectionComponent,
      ],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
