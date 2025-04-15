import { Component } from '@angular/core';

@Component({
  selector: 'app-template-designer',
  templateUrl: './template-designer.component.html',
  styleUrls: ['./template-designer.component.scss']
})
export class TemplateDesignerComponent {
  padding?: number;
borderWidth?: number;
title: string = '';
content: string = '';


previewDesign() {
  const previewWindow = window.open('', '_blank');
  if (previewWindow) {
    const border = this.borderWidth || 0;
    const padding = this.padding || 0;
    const title = this.title || 'Untitled';
    const content = this.content || 'No content provided.';

    previewWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            }

            .a4-preview {
              width: 210mm;
              height: 297mm;
              background-color: #f4f4f4;
              padding: ${padding}px;
              box-sizing: border-box;
            }

            .inner-border {
              width: 100%;
              height: 100%;
              border: ${border}px solid black;
              box-sizing: border-box;
              padding: 20px; /* inner content padding */
            }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <div class="a4-preview">
            <div class="inner-border">
              <h3>${title}</h3>
              <p>${content}</p>
            </div>
          </div>
        </body>
      </html>
    `);
    previewWindow.document.close();
  }
}

}
