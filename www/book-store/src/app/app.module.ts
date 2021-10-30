import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { CardComponent } from './components/card/card.component';

//start of import social login modules
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider , FacebookLoginProvider} from 'angularx-social-login';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import { SharedComponent } from './star-rating/components/main-page/shared/shared.component';
// import { AngularRaveModule } from 'angular-rave';
import {MatIconModule} from '@angular/material/icon';
=======
import { AngularRaveModule } from 'angular-rave';
>>>>>>> e39009320c6a0419ce8b7ff9aa9b73facd8592bf


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    // SharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule

    // AngularRaveModule
=======
    AngularRaveModule
>>>>>>> e39009320c6a0419ce8b7ff9aa9b73facd8592bf
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '110770812923-nsh217rehcgov5d6v1a80h82kmk6s4cu.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '261003865513295'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }