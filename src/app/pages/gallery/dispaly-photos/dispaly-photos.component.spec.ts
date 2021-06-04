import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyPhotosComponent } from './dispaly-photos.component';

describe('DispalyPhotosComponent', () => {
  let component: DispalyPhotosComponent;
  let fixture: ComponentFixture<DispalyPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispalyPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalyPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
