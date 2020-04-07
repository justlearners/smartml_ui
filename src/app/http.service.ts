import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



const baseUrl = "http://127.0.0.1:5000/";


// to make URL Dynamic, We can use

// let protocol = window.location.protocol;
// let hostname = window.location.hostname;

// let baseUrl ='';
// if(hostname === 'localhost'){
//     baseUrl = protocol+'//'+hostname+':8080/';
// }else{
//     baseUrl = protocol+'//'+hostname+'/';
// }


@Injectable({ providedIn: "root" })

export class AccessHttpService {

    constructor(private http: HttpClient) { }

    postHttpData(title: string, content: string) {

        const postData: Post = { title: title, content: content }

        this.http.post(baseUrl + 'postdata', postData, { observe: 'response' })

            .subscribe(responseData => {
                console.log(responseData)
            })
    }


    getHttpData(value) {

        return this.http.get(baseUrl + value)
    }

    deleteHttpData() {
        return this.http.delete(baseUrl + 'home',

            { observe: 'events' }

        )
    }


} 