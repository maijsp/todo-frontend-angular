import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message : string = 'Welcome'
  name : string = ''
  welcomeMessageFromService: string = ''
  errorMessageFromService: string = ''

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) {
  
    }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
    console.log(this.name)
  }
  
  getWelcomeMessage() {
    // console.log(this.welcomeDataService.executeHelloWorldBeanService())

    // Asynchronous
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );

    // console.log('last line of get welcome message')
  }

  getWelcomeMessageWithParameter() {
    // Asynchronous
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );

    // console.log('last line of get welcome message')
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error: any) {
    console.log(error);
    this.errorMessageFromService = error.error.message
  }
}