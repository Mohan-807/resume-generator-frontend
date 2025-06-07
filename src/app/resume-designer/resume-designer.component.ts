import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-designer',
  templateUrl: './resume-designer.component.html',
  styleUrls: ['./resume-designer.component.scss']
})
export class ResumeDesignerComponent {
 templateImage?: File;
  coverImage?: File;
  resumeForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      jobTitle: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      profileSummary: ['', Validators.required],
      skillOne: [''],
      skillTwo: [''],
      skillThree: [''],
      skillFour: [''],
      skillFive: [''],
      languageOne: [''],
      languageTwo: [''],
      languageThree: [''],
      languageFour: [''],
      languageFive: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstCompanyName: [''],
      firstCompanyRole: [''],
      firstCompanyLocation: [''],
      firstCompanyDescriptionOne: [''],
      firstCompanyDescriptionTwo: [''],
      secondCompanyName: [''],
      secondCompanyRole: [''],
      secondCompanyLocation: [''],
      secondCompanyDescriptionOne: [''],
      secondCompanyDescriptionTwo: [''],
      firstFieldOfStudy: [''],
      firstFieldOfStudyGrade: [''],
      firstFieldOfStudyLocation: [''],
      secondFieldOfStudy: [''],
      secondFieldOfStudyGrade: [''],
      secondFieldOfStudyLocation: [''],
      thirdFieldOfStudy: [''],
      thirdFieldOfStudyGrade: [''],
      thirdFieldOfStudyLocation: ['']
    });
  }

  private buildFormData(): FormData {
    const fd = new FormData();
    fd.append('templateId', '1');

    const fields = [
      'jobTitle', 'email', 'phone', 'location', 'profileSummary',
      'lastName', 'firstName',
      'firstCompanyName', 'firstCompanyRole', 'firstCompanyLocation',
      'secondCompanyName', 'secondCompanyRole', 'secondCompanyLocation',
      'firstFieldOfStudy', 'firstFieldOfStudyGrade', 'firstFieldOfStudyLocation',
      'secondFieldOfStudy', 'secondFieldOfStudyGrade', 'secondFieldOfStudyLocation',
      'thirdFieldOfStudy', 'thirdFieldOfStudyGrade', 'thirdFieldOfStudyLocation',
      'skillOne', 'skillTwo', 'skillThree', 'skillFour', 'skillFive',
      'languageOne', 'languageTwo', 'languageThree', 'languageFour', 'languageFive',
      'firstCompanyDescriptionOne', 'firstCompanyDescriptionTwo',
      'secondCompanyDescriptionOne', 'secondCompanyDescriptionTwo'
    ];

    fields.forEach(field => {
      fd.append(field, this.resumeForm.get(field)?.value || '');
    });

    if (this.templateImage) {
      fd.append('templateImage', this.templateImage);
    }

    if (this.coverImage) {
      fd.append('coverImage', this.coverImage);
    }

    return fd;
  }

  onImageSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.templateImage = file;
  }

  onCoverImageSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.coverImage = file;
  }

  previewResume() {
    const fd = this.buildFormData();

    this.http.post('https://resume-backend-utyr.onrender.com/generate-resume', fd, { responseType: 'text' as 'text' })
      .subscribe(html => {
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

                  .a4-container {
                    width: 210mm;
                    height: 297mm;
                    background: #fff;
                    box-shadow: 0 0 15px rgba(255,255,255,.2);
                    transform: scale(.6);
                    transform-origin: top center;
                    overflow: hidden;
                  }

                  @media print {
                    body {
                      background: #fff;
                      padding: 0;
                    }

                    .a4-container {
                      box-shadow: none;
                      transform: none;
                      margin: 0;
                    }
                  }
                </style>
              </head>
              <body>
                <div class="outer-design">
                  <div class="a4-container">
                    ${html}
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

  printResume() {
    const fd = this.buildFormData();

    this.http.post('https://resume-backend-utyr.onrender.com/generate-resume', fd, { responseType: 'text' as 'text' })
      .subscribe(html => {
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
                ${html}
              </body>
            </html>
          `);
          previewWindow.document.close();
        } else {
          console.error('Popup blocked! Please allow popups for this site.');
        }
      });
  }
}