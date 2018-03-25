/* base imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

/* ngbootstrap import */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* components imports*/
import { AppComponent } from './app.component';
import { ListaCaixasComponent } from './components/lista-caixas/lista-caixas.component';

/* angular firestore imports */
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage'; // nao necessario. apenas serve de cache offline??

/* FontAwesome 5 imports */
import fontawesome from '@fortawesome/fontawesome';
import * as faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import * as faTrash from '@fortawesome/fontawesome-free-solid/faTrash';

/* services imports */
import {CaixasService} from './services/caixas.service';
import { AutofocusDirective } from './directives/autofocus.directive';

fontawesome.library.add(faCheck, faTrash);

@NgModule({
  declarations: [ // aqui colocam-se todos os componentes
    AppComponent,
    ListaCaixasComponent,
    AutofocusDirective
  ],
  imports: [ // aqui todos os modulos
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'mycloud'), // imports firebase/app needed for everything
    AngularFirestoreModule.enablePersistence(), // faz uma cache offline dos dados que recebemos para quando não ha net
    AngularFireStorageModule // nao necessario em principio. não sei para que serve
  ],
  providers: [ // aqui todos os serviços
    CaixasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
