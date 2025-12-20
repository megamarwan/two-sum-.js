
function hello (callbnack , x ,y ){
    result = x+ y ; 
    callbnack(result);
}
function putNumber(f) { 
    console.log(f);
}

hello(putNumber,10,10)