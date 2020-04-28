import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICOS } from '../config/config';
import { switchMap } from 'rxjs/operators';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img:string, tipo:string = 'usuario'): any {

    let url = URL_SERVICOS + '/img'; 

    if(!img){
      return url + '/usuarios/xxx';
    }

    if(img.indexOf('https') >= 0){
      return img;
    }

    switch(tipo){

      case 'usuario':
         url += '/usuarios/' + img; 
         break;

      case 'medico':
         url += '/medicos/' + img;
         break;

      case 'hospital':
         url += '/hospitales/' + img;
         break;
      default:
        console.log('tipo de imagen no existe, usuario, medico, hospital');
        url += '/usuarios/xxx';
        break;

    }

    return url;

  }

}
