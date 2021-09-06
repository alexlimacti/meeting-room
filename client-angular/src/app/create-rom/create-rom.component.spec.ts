import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRomComponent } from './create-rom.component';

describe('CreateRomComponent', () => {
  let component: CreateRomComponent;
  let fixture: ComponentFixture<CreateRomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
