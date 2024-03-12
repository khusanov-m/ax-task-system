import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDemoComponent } from './ui-demo.component';

describe('UiDemoComponent', () => {
  let component: UiDemoComponent;
  let fixture: ComponentFixture<UiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
