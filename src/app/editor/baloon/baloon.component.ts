import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import * as Editor from "./baloon/build/ckeditor";
@Component({
  selector: 'app-baloon',
  templateUrl: './baloon.component.html',
  styleUrls: ['./baloon.component.css']
})
export class BaloonComponent implements OnInit {
  content: string = '';
  public Editor: any;  // Change the type to any

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getContent().subscribe((content: string) => {
      this.content = content;
    });

    // this.Editor = Editor;  
  }
}
