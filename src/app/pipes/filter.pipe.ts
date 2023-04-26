import { Pipe, PipeTransform } from '@angular/core';
 
 

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(value:any[],searchS:string,propName:string):any{
    const result:any=[]
    console.log(value)
    // if(!value || searchS=='' || propName==='' ){
    //   return value;
    // }
    value.forEach((val: any) => {
      if (val[propName].trim().toLowerCase().includes(searchS.toLowerCase())) {
        result.push(val)
      }

    });

    return result;
  }
}
