import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMenuComponent } from './hot-menu.component';

describe('HotMenuComponent', () => {
  let component: HotMenuComponent;
  let fixture: ComponentFixture<HotMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
