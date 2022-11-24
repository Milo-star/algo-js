let e = 1;
while (e <= 100){
    let x = e%2;

    if ( x == 0 ){
        console.log(e/2);
    } else { 
        console.log(e*3);  
    }
    e++;
}