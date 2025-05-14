import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent {
  templateImage?: string;
  coverImage?: string;
  resumeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      jobTitle: [''],
      email: [''],
      phone: [''],
      location: [''],
      profileSummary:[''],
      lastName:[''],
      firstName:[''],
      firstCompanyName:[''],
      firstCompanyRole:[''],
      firstCompanyLocation:[''],
      secondCompanyName:[''],
      secondCompanyRole:[''],
      secondCompanyLocation:[''],
      firstFieldOfStudy:[''],
      firstFieldOfStudyGrade:[''],
      firstFieldOfStudyLocation:[''],
      secondFieldOfStudy:[''],
      secondFieldOfStudyGrade:[''],
      secondFieldOfStudyLocation:[''],
      thirdFieldOfStudy:[''],
      thirdFieldOfStudyGrade:[''],
      thirdFieldOfStudyLocation:[''],
      skillOne:[''],
      skillTwo:[''],
      skillThree:[''],
      skillFour:[''],
      skillFive:[''],
      languageOne:[''],
      languageTwo:[''],
      languageThree:[''],
      languageFour:[''],
      languageFive:[''],
      firstCompanyDescriptionOne:[''],
      firstCompanyDescriptionTwo:[''],
      secondCompanyDescriptionOne:[''],
      secondCompanyDescriptionTwo:[''],
    });
  }

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

  onCoverImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.coverImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  previewDesign(): void {

    //  Get form values
    const jobTitle = this.resumeForm.get('jobTitle')?.value || '';
    const email = this.resumeForm.get('email')?.value || '';
    const phone = this.resumeForm.get('phone')?.value || '';
    const location = this.resumeForm.get('location')?.value || '';
    const profileSummary = this.resumeForm.get('profileSummary')?.value || '';
    const lastName = this.resumeForm.get('lastName')?.value || '';
    const firstName = this.resumeForm.get('firstName')?.value || '';
    const firstCompanyName = this.resumeForm.get('firstCompanyName')?.value || '';
    const firstCompanyRole = this.resumeForm.get('firstCompanyRole')?.value || '';
    const firstCompanyLocation = this.resumeForm.get('firstCompanyLocation')?.value || '';
    const secondCompanyName = this.resumeForm.get('secondCompanyName')?.value || '';
    const secondCompanyRole = this.resumeForm.get('secondCompanyRole')?.value || '';
    const secondCompanyLocation = this.resumeForm.get('secondCompanyLocation')?.value || '';
    const firstFieldOfStudy = this.resumeForm.get('firstFieldOfStudy')?.value || '';
    const firstFieldOfStudyGrade = this.resumeForm.get('firstFieldOfStudyGrade')?.value || '';
    const firstFieldOfStudyLocation = this.resumeForm.get('firstFieldOfStudyLocation')?.value || '';
    const secondFieldOfStudy = this.resumeForm.get('secondFieldOfStudy')?.value || '';
    const secondFieldOfStudyGrade = this.resumeForm.get('secondFieldOfStudyGrade')?.value || '';
    const secondFieldOfStudyLocation = this.resumeForm.get('secondFieldOfStudyLocation')?.value || '';
    const thirdFieldOfStudy = this.resumeForm.get('thirdFieldOfStudy')?.value || '';
    const thirdFieldOfStudyGrade = this.resumeForm.get('thirdFieldOfStudyGrade')?.value || '';
    const thirdFieldOfStudyLocation = this.resumeForm.get('thirdFieldOfStudyLocation')?.value || '';
    const skillOne = this.resumeForm.get('skillOne')?.value || '';
    const skillTwo = this.resumeForm.get('skillTwo')?.value || '';
    const skillThree = this.resumeForm.get('skillThree')?.value || '';
    const skillFour = this.resumeForm.get('skillFour')?.value || '';
    const skillFive = this.resumeForm.get('skillFive')?.value || '';
    const languageOne = this.resumeForm.get('languageOne')?.value || '';
    const languageTwo = this.resumeForm.get('languageTwo')?.value || '';
    const languageThree = this.resumeForm.get('languageThree')?.value || '';
    const languageFour = this.resumeForm.get('languageFour')?.value || '';
    const languageFive = this.resumeForm.get('languageFive')?.value || '';
    const firstCompanyDescriptionOne = this.resumeForm.get('firstCompanyDescriptionOne')?.value || '';
    const firstCompanyDescriptionTwo = this.resumeForm.get('firstCompanyDescriptionTwo')?.value || '';
    const secondCompanyDescriptionOne = this.resumeForm.get('secondCompanyDescriptionOne')?.value || '';
    const secondCompanyDescriptionTwo = this.resumeForm.get('secondCompanyDescriptionTwo')?.value || '';

    const previewWindow = window.open('', '_blank');
    if (previewWindow) {
      const templateImageTag = this.templateImage
        ? `<img src="${this.templateImage}" class="background-image" />`
        : '';

      const coverImageTag = this.coverImage
        ? `<img src="${this.coverImage}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover;" />`
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
            background-color: #d0e7ff;
            transform-origin: center center;
            position: relative;
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

          .image-cover-1 {
            position: absolute;
            top: 10px;
            left: 50px;
            padding: 10px;
            z-index: 3;
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
          }

          .image-cover-2 {
            height: 100%;
            aspect-ratio: 1/1;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid white;
          }

          .rectangle-1 {
            position: absolute;
            top: 160px;
            left: 0;
            width: 100%;
            height: 50px;
            background-color: darkblue;
            z-index: 1;
          }

          .rectangle-2 {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr;
            height: 100%;
            position: relative;
            z-index: 2;
            box-sizing: border-box;
          }

          .rectangle-3 {
            background: transparent;
            grid-column: span 2;
            position: relative;
            height: 100%;
            box-sizing: border-box;
          }

          .rectangle-4 {
            letter-spacing:0.5mm;
            position: relative;
            right:15px;
            top: 15px;
            height: 100%;
            box-sizing: border-box;
            color: white;
          }

          .outer-grid {
            display: grid;
            grid-template-columns: 1.3fr 1fr 1fr;
            gap: 20px;
            height: 100%;
            position: relative;
            z-index: 2;
            box-sizing: border-box;
          }

          .left-grid {
            background: rgba(0, 0, 0, 0.05);
            height: 100%;
            box-sizing: border-box;
            position: relative;
          }

          .left-grid-1 {
            position: absolute;
            width: 100%;
            top: 235px;
          }

          .left-grid-2 {
            padding: 0 15px;
            display: flex;
            flex-direction: column;
            gap: 1px;
          }

          .l-first-content-1 {
            padding-bottom: 20px;
          }

          .l-first-content-2 {
            font-weight: bold;
            font-size: 24px;
            position: relative;
            padding-bottom: 6px;
          }

          .l-first-content-3 {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background: linear-gradient(to right,  darkblue, purple);
          }

          .l-first-content-style {
            font-weight: normal;
            text-align: justify;
            word-break: normal;
            margin:5px 
          }

          .l-second-content-1 {
            padding-bottom: 20px;
          }

          .l-second-content-2 {
            font-weight: bold;
            font-size: 24px;
            position: relative;
            padding-bottom: 6px;
          }

          .l-second-content-3 {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background: linear-gradient(to right, darkblue, purple);
          }

          .l-second-content-4 {
            font-weight: normal;
            margin: 5px 0;
            text-align: justify;
            word-break: normal;
          }

          .l-third-content-1 {
            padding-bottom: 20px;
          }

          .l-third-content-2 {
            font-weight: bold;
            font-size: 24px;
            position: relative;
            padding-bottom: 6px;
          }

          .l-third-content-3 {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background: linear-gradient(to right, darkblue, purple);
          }

          .l-list {
            list-style: none;
            padding-left: 0;
            margin: 10px 0;
          }

          .l-list-style {
            position: relative;
            padding-left: 24px;
            margin-bottom: 10px;
          }

          .l-list-sub {
            position: absolute;
            left: 0;
          }

          .l-fourth-content-1 {
            padding-bottom: 20px;
          }

          .l-fourth-content-2 {
            font-weight: bold;
            font-size: 24px;
            position: relative;
            padding-bottom: 6px;
          }

          .l-fourth-content-3 {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background: linear-gradient(to right, darkblue, purple);
          }

          .right-grid {
            background: transparent;
            height: 100%;
            grid-column: span 2;
            box-sizing: border-box;
            position: relative;
          }

          .above-rec-1 {
            position: absolute;
            width: 100%;
            top: 50px;
            display: flex;
            flex-direction: column;
            gap: 4px; 
          }

          .above-rec-2 {
            font-size: 30px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .above-rec-3 {
            margin: 0;
            font-size: 50px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
    
        </style>
      </head>
      <body onload="window.print(); window.close();">
        <div class="a4-preview">
          ${templateImageTag}
          <!--Image cover-->
          <div class="image-cover-1">
             <div class="image-cover-2">
               ${coverImageTag}
             </div>
         </div>

          <!--Rectangle Shape -->
          <div class="rectangle-1">
            <div class="rectangle-2">
              <div><!--Empty Block--></div>
                 <div class="rectangle-3">
                   <div class="rectangle-4">
                        ${jobTitle}
                   </div>
                 </div>
            </div>
          </div>

          <div class="outer-grid">
              <!-- Left Column -->
              <div class="left-grid">
                <div class="left-grid-1">
                  <div class="left-grid-2">

                   <!-- Contact -->
                    <div class="l-first-content-1">
                      <div class="l-first-content-2">
                        CONTACT
                       <div class="l-first-content-3">
                        </div>
                      </div>

                      <div>
                         <h3 class="l-first-content-style">${email}</h3>
                         <h3 class="l-first-content-style">${phone}</h3>
                         <h3 class="l-first-content-style">${location}</h3>
                      </div>
                    </div>

              <!-- Profile Summary -->
              <div class="l-second-content-1">
                <div class="l-second-content-2">
                  Profile Summary
                  <div class="l-second-content-3"></div>
                </div>
                <div>
                  <h3 class="l-second-content-4">
                   ${profileSummary}
                  </h3>
                </div>
              </div>

              <!-- Skills -->
              <div class="l-third-content-1">
                <div class="l-third-content-2">
                  Skills
                  <div class="l-third-content-3"></div>
                </div>

                <ul class="l-list">
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${skillOne}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${skillTwo}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${skillThree}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${skillFour}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${skillFive}
                  </li>
                </ul>
              </div>

              <!-- Languages -->
              <div class="l-fourth-content-1">
                <div class="l-fourth-content-2">
                  Languages
                  <div class="l-fourth-content-3"></div>
                </div>

                <ul class="l-list">
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${languageOne}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${languageTwo}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${languageThree}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${languageFour}
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> ${languageFive}
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

     <!-- Right merged column -->
        <div
          class="right-grid">
          <!-- Above rectangle -->
          <div class="above-rec-1">
            <div class="above-rec-2">${lastName}</div>
            <div>
              <h1 class="above-rec-3">
                ${firstName}</h1>
            </div>
          </div>

          <!-- Below rectangle -->
          <div style="position: absolute; width: 100%; top: 235px;">
            <div style="padding: 0 15px; display: flex; flex-direction: column; gap: 1px;">

              <!-- Professional Experience -->
              <div style="padding-bottom: 20px;">
                <div style="font-weight: bold; font-size: 24px; position: relative; padding-bottom: 6px; right:15px;">
                  PROFESSIONAL EXPERIENCE
                  <div style="position: absolute; bottom: 0; left: 0; height: 2px; width: 100%;
                    background: linear-gradient(to right,  darkblue, purple);"></div>
                </div>

                <div style="position: relative;right:15px; padding-bottom: 20px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    ${firstCompanyName}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${firstCompanyRole}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${firstCompanyLocation}
                  </h3>

                  <ul style="list-style: none; padding-left: 20px; margin: 5px 0;">
                    <li style="position: relative; padding-left: 16px; margin-bottom: 6px; text-align: justify;">
                      <span style="position: absolute; left: 0; font-weight: normal;">•</span>
                      ${firstCompanyDescriptionOne}
                    </li>
                    <li style="position: relative; padding-left: 16px;">
                      <span style="position: absolute; left: 0; font-weight: normal; text-align: justify;">•</span>
                     ${firstCompanyDescriptionTwo}
                    </li>
                  </ul>
                </div>

                <div style="position: relative; right:15px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    ${secondCompanyName}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${secondCompanyRole}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${secondCompanyLocation}
                  </h3>

                  <ul style="list-style: none; padding-left: 20px; margin: 5px 0;">
                    <li style="position: relative; padding-left: 16px; margin-bottom: 6px; text-align: justify;">
                      <span style="position: absolute; left: 0; font-weight: normal;">•</span>
                     ${secondCompanyDescriptionOne}
                    </li>
                    <li style="position: relative; padding-left: 16px; text-align: justify;">
                      <span style="position: absolute; left: 0; font-weight: normal;">•</span>
                      ${secondCompanyDescriptionTwo}
                    </li>
                  </ul>
                </div>

              </div>

              <!-- Education -->
              <div style="padding-bottom: 20px;">
                <div style="font-weight: bold; font-size: 24px; position: relative; padding-bottom: 6px; right:15px;">
                  Education
                  <div style="position: absolute; bottom: 0; left: 0; height: 2px; width: 100%;
                    background: linear-gradient(to right,  darkblue, purple);"></div>
                </div>

                <div style="position: relative;right:15px; padding-bottom: 20px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    ${firstFieldOfStudy}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${firstFieldOfStudyGrade}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${firstFieldOfStudyLocation}
                  </h3>
                </div>

                <div style="position: relative;right:15px; padding-bottom: 20px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    ${secondFieldOfStudy}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${secondFieldOfStudyGrade}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${secondFieldOfStudyLocation}
                  </h3>
                </div>

                <div style="position: relative;right:15px; padding-bottom: 20px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    ${thirdFieldOfStudy}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${thirdFieldOfStudyGrade}
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    ${thirdFieldOfStudyLocation}
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
          </div>
        </div>
      </body>
    </html>
    `);
      previewWindow.document.close();
    }
  }

}
