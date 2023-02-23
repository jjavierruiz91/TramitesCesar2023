import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTramites'
})
export class FiltroTramitesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '') return value;
    const filterPost = [];
    for(const post of value ){
      if(post.nombre.toLowerCase().indexOf(arg.toLowerCase() ) > -1){
        filterPost.push(post);
      }
    }
    return filterPost;
  }
}
