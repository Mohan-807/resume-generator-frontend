import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-setup',
  templateUrl: './api-setup.component.html',
  styleUrls: ['./api-setup.component.scss']
})
export class ApiSetupComponent {


  templateImage?: File;
  coverImage?: File;
  resumeForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      jobTitle: [''],
      email: ['']
    });
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.templateImage = file;
  }

  onCoverImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.coverImage = file;
  }

  // add data to data base
  // previewDesign() { 
  //   if (!this.templateImage || !this.coverImage) return;

  //   const formData = new FormData();
  //   formData.append('jobTitle', this.resumeForm.value.jobTitle);
  //   formData.append('email', this.resumeForm.value.email);
  //   formData.append('templateImage', this.templateImage); // File
  //   formData.append('coverImage', this.coverImage); // File

  //   this.http.post('http://localhost:3000/resume', formData).subscribe({
  //     next: (response) => {
  //       console.log('Resume uploaded:', response);
  //     },
  //     error: (error) => {
  //       console.error('Upload error:', error);
  //     },
  //   });
  // }

  printResume() {
    const fd = new FormData();
    fd.append('templateId', '1');
    fd.append('jobTitle', this.resumeForm.value.jobTitle);
    fd.append('email', this.resumeForm.value.email);
    if (this.templateImage) {
      fd.append('templateImage', this.templateImage);
    }
    if (this.coverImage) {
      fd.append('coverImage', this.coverImage);
    }

    this.http.post('http://localhost:3000/generate-resume', fd, { responseType: 'text' as 'text' })
      .subscribe(html => {
        const resumeHtml: string = html;

        const previewWindow = window.open('', '_blank');

        if (previewWindow) {
          previewWindow.document.open();
          previewWindow.document.write(`
            <html>
              <head>
                <title>Resume</title>
                <style>
                  @media print {
                    body {
                      margin: 0;
                    }
                  }
                </style>
              </head>
              <body onload="window.print(); window.close();">
                ${resumeHtml}
              </body>
            </html>
          `);
          previewWindow.document.close();
        } else {
          console.error('Popup blocked! Please allow popups for this site.');
        }
      });
  }

  previewResume() {
    const fd = new FormData();
    fd.append('templateId', '1');
    fd.append('jobTitle', this.resumeForm.value.jobTitle);
    fd.append('email', this.resumeForm.value.email);
    if (this.templateImage) {
      fd.append('templateImage', this.templateImage);
    }
    if (this.coverImage) {
      fd.append('coverImage', this.coverImage);
    }

    this.http.post('https://resume-backend-utyr.onrender.com/generate-resume', fd, { responseType: 'text' as 'text' })
      .subscribe(html => {
        const resumeHtml: string = html;
        const popup = window.open('', '_blank');

        if (popup) {
          popup.document.open();
          popup.document.write(`
               <!DOCTYPE html>
                <html>
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width">
                <title>Resume Preview</title>
                 <style>
                /* dark backdrop */

                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center; 
                    font-family: Arial, sans-serif;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                    background: #000;
                  }
                    .outer-design {
                                padding: 2%;
                              }

                    /* the printable A4 page */
                    .a4-container {
                      width: 210mm;
                      height: 297mm;
                      background: #fff;
                      box-shadow: 0 0 15px rgba(255,255,255,.2);
                      transform: scale(.6);          /* zoom-out factor                            */
                      transform-origin: top center;  /* keep top edge fixed while scaling          */
                      overflow: hidden;              /* hide any spill-over inside the page        */
                    }

                              @media print {
                                body      { background: #fff; padding: 0; }
                                .a4-container {
                                  box-shadow: none;
                                  transform: none;             /* print at 100 % size                        */
                                  margin: 0;
                                }
                              }
                            </style>
                          </head>
                          <body>
                          <div class="outer-design">
                            <div class="a4-container">
                              ${resumeHtml}
                            </div>
                            </div>
                          </body>
                        </html>
                  `);

          popup.document.close();
        } else {
          console.error('Popup blocked! Please allow popups for this site.');
        }
      });


  }
}
