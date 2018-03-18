import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; // firestore
import { Observable } from 'rxjs/Observable'; // let us bind firestore to lists
import {CaixasInterface} from '../models/caixas-interface'; // import the model of caixas

@Injectable()
export class CaixasService {

  caixasCollection: AngularFirestoreCollection<CaixasInterface>;
  // Caixas: Observable<CaixasInterface[]>;
  Caixas: any;

  constructor(public afs: AngularFirestore) {
    /*
    this.Caixas = this.afs.collection('caixas', ref => ref.orderBy('numero', 'asc')).valueChanges();
    // importante: a variavel dentro do metodo colletion() tem de ter o mesmo
    // nome que a nossa coleccao dentro da nossa firestore online, por razoes obvias!!!
    */
   this.caixasCollection = this.afs.collection('caixas', ref => ref.orderBy('numero', 'asc'));
   // this.Caixas = this.caixasCollection.valueChanges();


   this.Caixas = this.caixasCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as CaixasInterface;
          data.id = a.payload.doc.id;
          return data;
        });
      });

  }

  getCaixas() {
    return this.Caixas;
  }

  updateCaixas(variavelDePayload: CaixasInterface) {
    this.Caixas = this.afs.doc(`caixas/${variavelDePayload.id}`);
    delete variavelDePayload.formVisible;
    this.Caixas.update(variavelDePayload);
  }

  addCaixas(caixa: CaixasInterface) {

    this.caixasCollection.add(caixa);
  }

}
