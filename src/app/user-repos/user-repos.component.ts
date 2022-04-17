import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})

export class UserReposComponent implements OnInit {
  @ViewChild('form')
  searchRepoForm!: NgForm;

  repositories: any;
  searchText!: string;
  displayRepository = true;
  displayErrorMessage = false;
  repositoryUserService: any;
  constructor(private reposervice:MyServiceService) { }

  ngOnInit(): void {
  }
  getRepos(){
    this.searchText =this.searchRepoForm.value.search;
    this.reposervice.getUserRepos(this.searchText).then(
      (response) =>{
        this.repositories=this.reposervice.getUserRepositories;
        this.displayRepository=true
      },
      (error) =>{
        this.displayErrorMessage=true;
        console.log(error);
        
      }
    );
  }

}
