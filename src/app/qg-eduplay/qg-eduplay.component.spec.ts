import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QgEduplayComponent } from './qg-eduplay.component';

describe('QgEduplayComponent', () => {
  let component: QgEduplayComponent;
  let fixture: ComponentFixture<QgEduplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QgEduplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QgEduplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
