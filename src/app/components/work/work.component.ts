import { Component, OnInit } from '@angular/core';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  WORK = [
    { project: "Project 1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates." },
    { project: "Project 2", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates." },
    { project: "Project 3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates." },
  ]


  constructor() { }

  ngOnInit() {
  }

}
