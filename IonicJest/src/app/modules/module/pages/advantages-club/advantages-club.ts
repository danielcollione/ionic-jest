import { Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-advantages-club',
  templateUrl: 'advantages-club.html',
  styleUrls: ['advantages-club.scss'],
})
export class AdvantagesClubPage {

  @ViewChild('iframe') iframe: ElementRef;

  ngOnInit() {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://clube.fattoria-app.com.br/webview?u=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzOTg3OTg0NDgxNSIsImNvb3JkcyI6eyJsbmciOm51bGwsIm1hcCI6MC4wLCJsYXQiOm51bGx9fQ.Yyq2Wz9TLs1pGVKzP-B5B2TxAUwfWJ3Fdq4Y0hz1-sZx8iT8muDd-poikt5yOoFliFz1lSNgOOwee1_rVPyNlw"
    )
  }

  iframeSrc: SafeUrl;

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  onHome() {
    this.router.navigateByUrl('/');
  }

  logoutWithSignIn() {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://clube.fattoria-app.com.br/logout?screen=cadastro'
    );
  }

  directLogin() {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://clube.fattoria-app.com.br/webview?u=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzOTg3OTg0NDgxNSIsImNvb3JkcyI6eyJsbmciOm51bGwsIm1hcCI6MS4wLCJsYXQiOm51bGx9fQ.3F3Y5xfqdSMvasbQv2TJu1FmisJxbNkSeVB1wnBqGNywNFVYocDJVYgcR_8G0_r0fLOZtvpYBsctuG80ZNxSkQ'
    );
  }
}
