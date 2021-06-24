import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits : string): any {
    if(!value){
      return ''
    }
    
    switch(targetUnits) {
      case 'gst':
        return value + 10;

      case 'free':
        return value + 0;

      default:
        throw new Error('Wrong Argument...')
    }

  }

}
