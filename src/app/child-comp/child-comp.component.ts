import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  private hero_id;
  @Input('variable_para_child')  hero: Hero;
  @Output() onChildDeleted = new EventEmitter<Hero>();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HeroService
              ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params: ParamMap) => {console.log('El id del héroe es: ',params.get('id'));}
    );

    // https://angular.io/api/router/ParamMap

/*
    this.route.paramMap.subscribe(
      (params: ParamMap) => {this.hero_id = params.get('id');}
    );
*/
/*
    this.route.paramMap
        .switchMap((params: ParamMap) => this.service.getHero(params.get('id')))
        .subscribe((data)=>{this.hero = data;});
*/

    // Alternativa obtener id sin Observable
/*
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getHero(id).subscribe((data)=>{this.hero = data;});
*/

  }

  delete() {
    this.onChildDeleted.emit(this.hero);
  }

}
