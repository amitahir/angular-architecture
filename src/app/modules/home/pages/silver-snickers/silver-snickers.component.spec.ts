import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverSnickersComponent } from './silver-snickers.component';

describe('SilverSnickersComponent', () => {
  let component: SilverSnickersComponent;
  let fixture: ComponentFixture<SilverSnickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverSnickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilverSnickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
