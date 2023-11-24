import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.select("contador")
      .subscribe(contador => this.contador = contador);
  }

  multiplicar(): void {
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }

}
