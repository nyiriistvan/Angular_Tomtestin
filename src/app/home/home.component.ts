/*
 File: home.component.ts
 Author: Nyiri István
 Copyright: 2023, Nyiri István
 Group: Szoft_II_N
 Date: 2023-07-07
 Github: https://github.com/nyiriistvan/
 Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weightAreaForm !: FormGroup;
  weightArea !: number;

  ngOnInit(): void {
    this.weightAreaForm = new FormGroup({
      weight: new FormControl(0),
      height: new FormControl(0)
    });
  }

  calculateWeightArea() {
    const {weight, height} = this.weightAreaForm.value;
    this.weightArea = weight / Math.pow(height, 2);
  }
  onKeyup(event: any) {
    console.log(event.key);
    if (event.key === 'Enter') 
    {
      console.log('A felhasználó használta az Enter gombot.');
    }
  }
}


