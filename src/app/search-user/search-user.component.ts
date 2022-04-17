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
 DetailContainer = true;
 Error = false;
@Input()users!:string[]
 constructor(private userservice:MyServiceService) { }
 

//  getUsers(){
//    this.userservice.getData().subscribe((data) =>{
//      console.log(data);
//      this.users=data;
     
//    })
//  }
@ViewChild('form')
 searchForm!: NgForm;
  ngOnInit(): void {
 }
 searchGithubUser () {
   this.searchText = this.searchForm.value.search;
   this.userservice.getUserDataApi(this.searchText).then(
     (response) => {
       this.user = this.userservice.getUserDetails;
       this.DetailContainer = true;

     },
     (error) => {
       console.log(error);
       this.Error = true;
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
