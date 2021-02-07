import { Component, OnInit } from '@angular/core';
import { GithubfetcherService } from "../services/githubfetcher.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  username: string;
  repos: any[];

  constructor(private githubService: GithubfetcherService) {
    this.user = false;
  }

  searchUser() {
    this.githubService.updateUser(this.username);

    this.githubService.getUser()
      .subscribe((user) => {this.user = user;});

    this.githubService.getRepos()
      .subscribe((repos) => {this.repos = repos;});
  }

  ngOnInit() {
  }

}