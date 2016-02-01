import {bootstrap}    from 'angular2/platform/browser'
import {FlugSuchen} from './flug-suchen'
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

var services = [
    HTTP_PROVIDERS  
];

bootstrap(FlugSuchen, services);