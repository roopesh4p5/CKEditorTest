import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinebuildComponent } from './onlinebuild.component';

describe('OnlinebuildComponent', () => {
  let component: OnlinebuildComponent;
  let fixture: ComponentFixture<OnlinebuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinebuildComponent]
    });
    fixture = TestBed.createComponent(OnlinebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
