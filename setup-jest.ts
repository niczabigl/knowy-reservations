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
