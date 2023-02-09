import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransactionComponent } from './recent-transaction.component';

describe('RecentTransactionComponent', () => {
  let component: RecentTransactionComponent;
  let fixture: ComponentFixture<RecentTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
