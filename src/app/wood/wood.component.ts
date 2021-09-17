import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import {Furniture} from "../models/furniture.model";
import {WoodService} from "../wood.service";

@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css']
})
export class WoodComponent implements OnInit {

  public furniture: Furniture[] = [];

  constructor(private woodService: WoodService) { }

  ngOnInit(): void {
    this.woodService.getFurniture().subscribe(
      (furniture) =>  {
        this.furniture = furniture
      }
    );
  }

}
