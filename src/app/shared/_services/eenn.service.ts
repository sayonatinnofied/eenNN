import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from '../../app.globals'

import { Work } from '../_model/work.model';
import { Fun } from '../_model/fun.model';
import { Health } from '../_model/health.model';
import { Full } from '../_model/full.model';

@Injectable()
export class EENNService {
    constructor(private http: HttpClient, private _global: AppGlobals) { }

    getAll() {
        return this.http.get<Full>(`${this._global.baseAPIUrl}/all`);
    }

    getWork() {
        return this.http.get<Work[]>(`${this._global.baseAPIUrl}/work`);
    }

    getFun() {
        return this.http.get<Fun[]>(`${this._global.baseAPIUrl}/fun`);
    }

    getHealth() {
        return this.http.get<Health[]>(`${this._global.baseAPIUrl}/health`);
    }

    search(queryString: string) {
        return this.http.get<Full>(`${this._global.baseAPIUrl}/search/` + queryString);
    }

}