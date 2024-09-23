import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriBalanceComponent } from './tri-balance.component';

describe('TriBalanceComponent', () => {
  let component: TriBalanceComponent;
  let fixture: ComponentFixture<TriBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
