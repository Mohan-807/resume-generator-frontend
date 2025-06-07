import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-designer',
  templateUrl: './resume-designer.component.html',
  styleUrls: ['./resume-designer.component.scss']
})
export class ResumeDesignerComponent {
  templateImage?: string;

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.templateImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  previewDesign(): void {
    const previewWindow = window.open('', '_blank');
    if (previewWindow) {
      const templateImageTag = this.templateImage
        ? `<img src="${this.templateImage}" class="background-image" />`
        : '';

      previewWindow.document.write(`
        <html>
          <head>
            <style>
              @page {
                size: A4;
                margin: 0;
              }

              body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }

              .a4-preview {
                width: 210mm;
                height: 297mm;
                position: relative;
                overflow: hidden;
                page-break-after: always;
              }

              .background-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 0;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }

              .content-layer {
                position: relative;
                z-index: 1;
                padding: 20px;
                color: #000;
              }
            </style>
          </head>
          <body onload="window.print(); window.close();">
            <div class="a4-preview">
              ${templateImageTag}
              <div class="content-layer">
                <!-- Add your content here later -->
              </div>
            </div>
          </body>
        </html>
      `);
      previewWindow.document.close();
    }
  }
}
