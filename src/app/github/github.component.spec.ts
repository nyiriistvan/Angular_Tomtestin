/*
 File: github.component.spec.ts
 Author: Nyiri István
 Copyright: 2023, Nyiri István
 Group: Szoft_II_N
 Date: 2023-07-07
 Github: https://github.com/nyiriistvan/
 Licenc: GNU GPL
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
