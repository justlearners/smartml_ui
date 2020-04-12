import { AccessHttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  selectedFile: File = null;

  constructor(private uploadService: AccessHttpService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0]
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image.jpeg', this.selectedFile, this.selectedFile.name)
    this.uploadService.upload(fd).subscribe(res => {
      console.log(res);
    })
  }


}
