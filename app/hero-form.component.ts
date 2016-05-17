/**
 * Created by peter on 16-5-10.
 */
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {Hero} from "./hero";
import {PowerService} from "./power.service";
import {CanDeactivate, ComponentInstruction} from "@angular/router-deprecated";

@Component({
  selector : 'hero-form',
  templateUrl: 'app/hero-form.component.html',
  providers : [PowerService]
})
export class HeroFormComponent implements OnInit, CanDeactivate {

  ngOnInit() {
    console.log("heroform component initialized.");
  }

  constructor(private powerService : PowerService) {
    this.powers = powerService.getAllPowers();
  }
/*  powerService : PowerService;*/
  active = true;
  submitted = false;
  powers : string[];

  model : Hero = new Hero(1, "Superman", "123", "alterego");

  newHero() {
     this.model = new Hero(100, '', '', '');
     this.active = false;
     setTimeout(()=>this.active=true, 20000);
  }

  onSubmit() {
    console.log(this.model);
    this.submitted = true;
  }

  routerCanDeactivate(next : ComponentInstruction, previous : ComponentInstruction) : any {
    return confirm("are you sure?");
  }
}
