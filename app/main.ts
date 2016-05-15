import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Title} from '@angular/platform-browser';

bootstrap(AppComponent, [Title, HTTP_PROVIDERS, ROUTER_PROVIDERS]);
