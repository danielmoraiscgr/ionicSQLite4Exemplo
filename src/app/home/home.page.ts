import { Component } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  databaseObj: SQLiteObject; // Database instance object
  name_model:string = ""; // Input field model
  row_data: any = []; // Table rows
  readonly database_name:string = "ipec.db"; // DB name
  readonly table_name:string = "tbProdutor"; // Table name
  constructor(private sqlite: SQLite, private platform: Platform) {

    this.platform.ready().then(() => {
         this.createDB();
      }).catch(error => {
      console.log(error);
    })
  }// todos sao publicos como se fosse set get 

  createDB() {  // metodo classe db
    this.sqlite.create({
      name: this.database_name,  // this reverenciar a variavel dela mesmo
      location: 'default'
    })
      .then((db: SQLiteObject) => { // promessa foi feita
        this.databaseObj = db;
        alert('Database criado !');
      })
      .catch(e=> {  // a letra "e" alias pode ser alguer nome , Ex: erro
        alert("erro : " + JSON.stringify(e))  // convert objeto para string
      });
  }

  createTable() {
    this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(255))', [])
      .then(() => {  // then () nao recebe nada
        alert('Tabela criada !');
      })
      .catch(e => {
        alert("erro : " + JSON.stringify(e))
      });
  }

  insertRow() {
    if (!this.name_model.length) {
      alert("Enter Name");
      return;
    }
    this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ("' + this.name_model + '")', [])
      .then(() => {
        alert('Registro inserido !');
        this.getRows();
      })
      .catch(e => {
        alert("erro : " + JSON.stringify(e))
      });
  }

  editRow(item) {
    if (!this.name_model.length) {
      alert("Enter Name");
      return;
    }
    this.databaseObj.executeSql("update "+this.table_name + "set name="+this.name_model+" WHERE pid = " + item.pid , [])
      .then(() => {
        alert('Registro alterado !');
        this.getRows();
      })
      .catch(e => {
        alert("erro : " + JSON.stringify(e))
      });
  }

  getRows() {
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {
        this.row_data = []; // atribui row_data como array vazio para preencher 
        if (res.rows.length > 0) {  // quantidade de registros da tabela
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));  // inserindo registro na array
          }
        }
      })
      .catch(e => {
        alert("erro : " + JSON.stringify(e))
      });
  }

  deleteRow(item) {
    this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
      .then((res) => {
        alert("Registro removido !");
        this.getRows();
      })
      .catch(e => {
        alert("erro : " + JSON.stringify(e))
      });
  }

}
