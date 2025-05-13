import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent {
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
               <img src="/assets/image-2.jpg" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" />
             </div>
         </div>

          <!--Rectangle Shape -->
          <div class="rectangle-1">
            <div class="rectangle-2">
              <div><!--Empty Block--></div>
                 <div class="rectangle-3">
                   <div class="rectangle-4">
                       JOB TITLE
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
                         <h3 class="l-first-content-style">
                            sally.branders&#64;gmail.com
                         </h3>
                         <h3 class="l-first-content-style">
                           +91 1234567890
                         </h3>
                         <h3 class="l-first-content-style">
                            India, Bangalore
                         </h3>
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
                    Business development manager looking to obtain a challenging position in a
                    organization, utilizing my proven track record in driving revenue growth and
                    forging strategic partnerships to achieve business objectives.
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
                    <span class="l-list-sub">✔</span> Excel
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> PowerPoint
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> CRM
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> Problem-Solving
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> Team Leadership
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
                    <span class="l-list-sub">✔</span> Kannada: Native
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> Tamil: Intermediate
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> Telugu: Intermediate
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> Hindi: Intermediate
                  </li>
                  <li class="l-list-style">
                    <span class="l-list-sub">✔</span> English: Fluent
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
            <div class="above-rec-2">Sally</div>
            <div>
              <h1 class="above-rec-3">
                Branders</h1>
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
                    XYZ Consulting Firm
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    Business development manager
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    India, Bangalore
                  </h3>

                  <ul style="list-style: none; padding-left: 20px; margin: 5px 0;">
                    <li style="position: relative; padding-left: 16px; margin-bottom: 6px; text-align: justify;">
                      <span style="position: absolute; left: 0; font-weight: normal;">•</span>
                      Developed and executed a comprehensive sales strategy, resulting in a
                      40% increase in annual revenue within one year.
                    </li>
                    <li style="position: relative; padding-left: 16px;">
                      <span style="position: absolute; left: 0; font-weight: normal; text-align: justify;">•</span>
                      Identified and pursued new business opportunities through market research.
                    </li>
                  </ul>
                </div>

                <div style="position: relative; right:15px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    ABC Corporation
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    Sales representative
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    India, Bangalore
                  </h3>

                  <ul style="list-style: none; padding-left: 20px; margin: 5px 0;">
                    <li style="position: relative; padding-left: 16px; margin-bottom: 6px; text-align: justify;">
                      <span style="position: absolute; left: 0; font-weight: normal;">•</span>
                      Achieved consistent sales targets by successfully prospecting and closing
                      new business opportunities in a competitive market.
                    </li>
                    <li style="position: relative; padding-left: 16px; text-align: justify;">
                      <span style="position: absolute; left: 0; font-weight: normal;">•</span>
                      Conducted product demonstrations and presentations to potential clients.
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
                    Bachelor of Engineering in ECE
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    7.8 CGPA
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    India, Bangalore
                  </h3>
                </div>

                <div style="position: relative;right:15px; padding-bottom: 20px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    PUC in GR Educational Institutions
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    78%
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    India, Bangalore
                  </h3>
                </div>

                <div style="position: relative;right:15px; padding-bottom: 20px;">
                  <h3 style="font-weight: bold; text-align: justify; word-break: normal; margin: 5px">
                    SSLC in GR Educational Institutions
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    9.4 CGPA
                  </h3>
                  <h3 style="font-weight: normal; text-align: justify; word-break: normal; margin: 5px">
                    India, Bangalore
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
