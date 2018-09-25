import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

import { AppRoutingModule } from './app-routing.module';

import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';

import { MusicService } from './services/music.service';
import { reducers, metaReducers } from './ngrx/app.reducer';
import { MyHammerConfig } from './common/config';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    AppRoutingModule,
    RoundProgressModule
  ],
  providers: [
    MusicService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    {
      provide: ROUND_PROGRESS_DEFAULTS,
      useValue: {
        color: '#2F5965',
        background: '#95AAB0',
        radius: 140,
        stroke: 4,
        semicircle: false,
        rounded: true,
        clockwise: true,
        responsive: false,
        animation: 'easeOutCubic',
        animationDelay: 0,
        duration: 800
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
