import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/_services/message.service';
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

  constructor(private messageService: MessageService, private router: Router, private authService: AuthService, private sanitizer:DomSanitizer) {    
      this.messages$=this.messageService.getMessages();
      this.loggedUser$=this.authService.user$;
  }

  desanitizeURL(text:string):SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(text);
  }

  ngOnInit(): void {
    this.messages$=this.messageService.getMessages();
    this.loggedUser$=this.authService.user$;
    
  }
}