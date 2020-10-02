const nemo = ['nemo'];

function findNemo(array){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
        if(array[i]=='nemo'){
            console.log('Found NEMO!');
        }
    }

}

findNemo(nemo);