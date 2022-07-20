import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildComponentComponent } from './hero-child-component.component';

describe('HeroChildComponentComponent', () => {
  let component: HeroChildComponentComponent;
  let fixture: ComponentFixture<HeroChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroChildComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
