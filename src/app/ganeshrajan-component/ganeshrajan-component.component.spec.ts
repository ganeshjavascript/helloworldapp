import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaneshrajanComponentComponent } from './ganeshrajan-component.component';

describe('GaneshrajanComponentComponent', () => {
  let component: GaneshrajanComponentComponent;
  let fixture: ComponentFixture<GaneshrajanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaneshrajanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaneshrajanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
