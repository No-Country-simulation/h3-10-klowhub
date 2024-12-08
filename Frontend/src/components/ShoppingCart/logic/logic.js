export default function rellenarStar(value){
    let valornew = value;
    let arrayvalue = []
    let c = 0
     
    while (c <= 4){
        console.log(valornew)
       
       if( valornew >= 1 ) {
         valornew = valornew -1 
         arrayvalue.push(1)
        } else if ( valornew > 0 ){
           arrayvalue.push( Math.abs( valornew ))
           valornew = valornew -1
          } else  if(valornew <= 0){
             valornew = valornew -1
             arrayvalue.push(0)
    }     
        c++;
     }
    return(arrayvalue)
}