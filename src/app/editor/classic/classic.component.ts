
import { Component, OnInit } from '@angular/core';
// import Editor from './classy/build/ckeditor';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent  {
  content: string = '';
  
  constructor(private contentService:ContentService) {}
  
  // public Editor = Editor;
  ngOnInit() {
    this.contentService.getContent().subscribe((content: string) => {
      this.content = content;
    })
  }
}

