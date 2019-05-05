import { Pipe, PipeTransform } from '@angular/core';
import { Time } from './times/time-resumo/time.model';


@Pipe({
  name: 'fatiaArrays'

})
export class FatiaArraysPipe implements PipeTransform {

  transform(value: Time[]): Time[][] {
    let tempArray: Time[] = []
    let newArray: Time[][] = []
    let i,j: number=0

    
    for (i=0; i < value.length; i++) {      
       
      if (i<(6+j)) {
        console.log(`i: ${i}`)
        console.log(`j-temp: ${i}`)    
        tempArray.push(value[i])        
      } else {
        j=i
        newArray.push(tempArray);
        tempArray=[]
        console.log(`i-temp: ${i}`)  
        console.log(`j-final: ${j}`)  
        
      }
    }
    return newArray;

    




    return newArray;
  }
}
