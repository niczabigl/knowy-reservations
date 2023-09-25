// require('zone.js/dist/zone')
// require('zone.js/dist/zone-testing')
// const getTestBed = require('@angular/core/testing').getTestBed
// const BrowserDynamicTestingModule = require('@angular/platform-browser-dynamic/testing')
//     .BrowserDynamicTestingModule
// const platformBrowserDynamicTesting = require('@angular/platform-browser-dynamic/testing')
//     .platformBrowserDynamicTesting

// getTestBed().initTestEnvironment(
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
// )

import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

TestBed.configureTestingModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent],
  imports: [AppModule],
  providers: [
    provideMockStore({ initialState: provideMockStore({}) }),
  ],
});

TestBed.compileComponents();
