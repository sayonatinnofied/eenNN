import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_model/user.model';
import { AppGlobals } from '../../app.globals';
import { ActionSheetController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ActionSheetService {

    constructor(public actionSheetController: ActionSheetController) { }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Actions',
            buttons: [{
                text: 'Open in slack',
                icon: 'arrow-dropright-circle',
                handler: () => {
                   this.openInSlack();
                }
            }, {
                text: 'Favorite',
                icon: 'heart',
                handler: () => {
                    this.addToFavourite();
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }

    addToFavourite(){
        console.log('Favorite clicked');
    }

    openInSlack() {
        console.log('Play clicked');
    }
}