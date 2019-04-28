import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketSorusuComponent } from './anket-sorusu.component';

describe('AnketSorusuComponent', () => {
  let component: AnketSorusuComponent;
  let fixture: ComponentFixture<AnketSorusuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketSorusuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketSorusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
