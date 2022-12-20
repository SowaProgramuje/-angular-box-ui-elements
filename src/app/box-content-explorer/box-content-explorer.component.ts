import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../environment/environment';
declare let Box: any;

@Component({
  selector: 'box-content-explorer',
  templateUrl: './box-content-explorer.component.html',
  styleUrls: ['./box-content-explorer.component.scss'],
})

export class BoxContentExplorerComponent implements OnInit {

  @Input() folderId = '';

  ngOnInit(): void {
    console.log(Box)
    const contentExplorer = new Box.ContentExplorer();
    contentExplorer.show(this.folderId, environment.BoxDeveloperToken, {
      container: '#box-content-explorer'
    });
  }
}
