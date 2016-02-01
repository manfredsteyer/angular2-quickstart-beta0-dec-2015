import {Component} from 'angular2/core';
import {Flug} from './flug';
import {Http, URLSearchParams} from 'angular2/http';


@Component({
    selector: 'flug-suchen',
    templateUrl: 'app/flug-suchen.html'
})
export class FlugSuchen { 
    
    von = "Graz";
    nach = "Hamburg";
    fluege: Array<Flug> = [];    
    selectedFlug: Flug;
    
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    
    suchen() {
        
        var url = "http://www.angular.at/api/flug";
        var params = new URLSearchParams();
        
        params.set('abflugOrt', this.von);
        params.set('zielOrt', this.nach);
        
        this
            .http
            .get(url, {search: params})
            .map(resp => resp.json())
            .subscribe(fluege => {
               this.fluege = fluege; 
            });
        
    }
    
    select(flug: Flug) {
       this.selectedFlug = flug; 
    }
    
}
