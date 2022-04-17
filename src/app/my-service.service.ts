import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDetails } from './user-details';
import { Repositories } from './repositories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MyServiceService {
//  constructor(private http:HttpClient){}
//  getData():Observable<any>{
//    const url ="https://api.github.com/users"

//    return this.http.get<any>(url)
//  }




  getUserDetails: any = UserDetails;
  getUserRepositories: any = Repositories;


  constructor(private http:HttpClient) {
    this.getUserDetails = new UserDetails('','','','','',0,0,0, new Date(),'');
    this.getUserRepositories =new Repositories('','','','',new Date());
   }

  //  user details
  getUserDataApi(gitUserName:string) {
    interface ApiUserResponse {
      login: string,
      avatar_url: string,
      html_url: string,
      name: string,
      bio: string,
      public_repos: number,
      followers: number,
      following: number,
      created_at: Date,
      location: string,
    }

    let userPromise = new Promise<void>((resolve, reject) =>
    this.http.get<ApiUserResponse>(environment.apiUrl +'/' +gitUserName  +'?access_token'+environment.apiKey)

        .toPromise().then(
          (response) => {
            this.getUserDetails = response;
            resolve();

            console.log('Search Data',response);
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return userPromise;
  }
  getUserRepos(gitUserName:string) {
    interface ApiUserResponse {
      login: string,
      avatar_url: string,
      html_url: string,
      name: string,
      bio: string,
      public_repos: number,
      followers: number,
      following: number,
      created_at: Date,
      location: string,
    }

    let repositoryPromise = new Promise<void>((resolve, reject) =>
    this.http.get<ApiUserResponse>(environment.apiUrl +'/' +gitUserName  +'?access_token'+environment.apiKey)

    // this.http.get<ApiUserResponse>(environment.apiUrl +'/' +gitUserName  +'?access_token=' +environment.apiKey)
      //  this.http.get('https://api.github.com/users/CalebKabaya?access_token=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')

        .toPromise().then(
          (response) => {
            this.getUserRepositories = response;
            resolve();

            console.log('Search repo',response);
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return repositoryPromise;
  }
}
