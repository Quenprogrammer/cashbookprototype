import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatViewComponent } from './certificat-view.component';

describe('CertificatViewComponent', () => {
  let component: CertificatViewComponent;
  let fixture: ComponentFixture<CertificatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
