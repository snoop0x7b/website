import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillService: SkillsService ) { }

  public skillList: string[] = [ ];
  ngOnInit(): void {
     this.skillService.getSkills().subscribe( skills => this.skillList = skills);
  }

}
