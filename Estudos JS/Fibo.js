



function Fib(x){
    let a = 0;
    let b = 1;
    for(let i =0;i<=x;i++){
        
        let fibo = a+b
        a = b;
        b = fibo
        
        
        console.log(a)
    }
}

Fib(10)