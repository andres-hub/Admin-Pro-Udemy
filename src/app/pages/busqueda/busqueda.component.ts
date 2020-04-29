import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICOS } from 'src/app/config/config';
import { Usuario } from 'src/app/models/usuario.model';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [];
  medicos: Medico[] = [];
  hospitales: Hospital[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {

    activatedRoute.params.subscribe(params => {
      let termino = params['termino'];
      this.buscar(termino);
    });

   }

  ngOnInit(): void {
  }

  buscar(termino: string){

    let url = URL_SERVICOS + '/busqueda/todo/' + termino;
    this.http.get(url).subscribe((resp: any)=>{

      console.log(resp);
      this.hospitales = resp.hospitales;
      this.medicos = resp.medicos;
      this.usuarios = resp.usuarios;

    });

  }

}
