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

  constructor(private fb: FormBuilder, private http: HttpClient) {}

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

previewDesign() {
  if (!this.templateImage || !this.coverImage) return;

  const formData = new FormData();
  formData.append('jobTitle', this.resumeForm.value.jobTitle);
  formData.append('email', this.resumeForm.value.email);
  formData.append('templateImage', this.templateImage); // File
  formData.append('coverImage', this.coverImage); // File

  this.http.post('http://localhost:3000/resume', formData).subscribe({
    next: (response) => {
      console.log('Resume uploaded:', response);
      this.fetchResume();
    },
    error: (error) => {
      console.error('Upload error:', error);
    },
  });
}


  fetchResume() {
    this.http.get<any>('http://localhost:3000/resume').subscribe({
      next: (data) => {
        console.log('Fetched Resume:', data);
        // Here, you could update the template preview
      },
      error: (err) => console.error('Fetch Error:', err)
    });
  }
}
