/**
 * Created by peter on 16-5-10.
 */
import {Component} from '@angular/core';
import {NgForm} from '@angular/common';

import {Hero} from "./hero";

@Component({
  selector : 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
   powers = ['ab', 'cc', 'dd'];

  model : Hero = new Hero(1, "SuperHero", this.powers[1], "alterego");
}
