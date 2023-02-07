/*
 File: home.component.spec.ts
 Author: Nyiri István
 Copyright: 2023, Nyiri István
 Group: Szoft_II_N
 Date: 2023-07-07
 Github: https://github.com/nyiriistvan/
 Licenc: GNU GPL
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
