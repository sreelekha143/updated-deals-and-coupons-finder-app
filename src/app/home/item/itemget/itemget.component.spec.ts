import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemgetComponent } from './itemget.component';

describe('ItemgetComponent', () => {
  let component: ItemgetComponent;
  let fixture: ComponentFixture<ItemgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
