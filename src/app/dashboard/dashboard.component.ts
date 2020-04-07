import { Post } from './../post.model';
import { AccessHttpService } from './../http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faceData: string = null;
  analyseData: string = null;

  constructor(private http: HttpClient, private accessHttp: AccessHttpService) { }

  ngOnInit(): void { }

  onSubmit(value: Post) {

    console.log(value);

    this.accessHttp.postHttpData(value.title, value.content)
  }


  getFace() {
    this.accessHttp.getHttpData('face/getFaceName').subscribe(responseData => {
      console.log(responseData)

      this.faceData = JSON.stringify(responseData)

      console.log(this.faceData)
    })
  }

  analyseFace() {
    this.accessHttp.getHttpData('face/analyseFace').subscribe(responseData => {
      console.log(responseData)
      this.analyseData = JSON.stringify(responseData)
    })
  }

  deleteData() {
    this.accessHttp.deleteHttpData().subscribe(event =>
      console.log(event)

    )
  }

}
