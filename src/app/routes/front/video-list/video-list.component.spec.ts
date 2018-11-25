import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontVideoListComponent } from './video-list.component';

describe('FrontVideoListComponent', () => {
  let component: FrontVideoListComponent;
  let fixture: ComponentFixture<FrontVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
