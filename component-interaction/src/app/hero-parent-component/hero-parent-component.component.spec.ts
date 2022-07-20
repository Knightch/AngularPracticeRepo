import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParentComponentComponent } from './hero-parent-component.component';

describe('HeroParentComponentComponent', () => {
  let component: HeroParentComponentComponent;
  let fixture: ComponentFixture<HeroParentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroParentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
