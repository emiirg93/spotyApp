import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): String {
    
    let retorno:String;

    if(!images){
      retorno = "assets/img/no-image.png"
    }
    
    if(images.length > 0){
      retorno = images[0].url
    }else{
      retorno = "assets/img/no-image.png"
    }
    
    return retorno;
  }

}
