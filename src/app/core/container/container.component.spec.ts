import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';

import { ContainerComponent } from './container.component';
import { RouterModule } from '@angular/router';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
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

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
