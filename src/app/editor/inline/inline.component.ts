import { Component, OnInit } from '@angular/core';
import Editor from './inline/build/ckeditor';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {
  content: string = '';
  public Editor: any;  // Change the type to any

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getContent().subscribe((content: string) => {
      this.content = content;
    });

    this.Editor = Editor;  
  }
}
