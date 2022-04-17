import { invalid } from '@angular/compiler/src/render3/view/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any): any{
    if (!value) return value;
    if (typeof value !== 'string'){
      throw invalidPipeArgumentError(MypipePipe,value)
    }
    return value.toUpperCase();
  }

}
