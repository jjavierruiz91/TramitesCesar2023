import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuarioF'
})
export class FiltroUsuarioFPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '') return value;
    const filterPost = [];
    for(const post of value ){
      if(post.nombres.toLowerCase().indexOf(arg.toLowerCase() ) > -1){
        filterPost.push(post);
      }
    }
    return filterPost;
  }
}
