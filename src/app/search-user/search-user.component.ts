import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { UserDetails } from '../user-details';
 
@Component({
 selector: 'app-search-user',
 templateUrl: './search-user.component.html',
 styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
 user!:UserDetails;
 searchText!:string;
 displayUserDetailContainer = true;
 displayGithubUserErrorNotFound = true;
@Input()users!:string[]
 constructor(private userservice:MyServiceService) { }
 

//  getUsers(){
//    this.userservice.getData().subscribe((data) =>{
//      console.log(data);
//      this.users=data;
     
//    })
//  }
@ViewChild('f')
 searchForm!: NgForm;
  ngOnInit(): void {
 }
 searchGithubUser () {
   this.searchText = this.searchForm.value.search;
   this.userservice.getUserDataApi(this.searchText).then(
     (response) => {
       this.user = this.userservice.getUserDetails;
       this.displayUserDetailContainer = true;

     },
     (error) => {
       console.log(error);
       this.displayGithubUserErrorNotFound = true;
     }
   );
 }
//  getUser(username:any) {
//   return fetch(`https://api.github.com/users/${login}`)
//   .then(response => response.json())
//   .then(response => {
//       return response;
//   })
// }
 
}
