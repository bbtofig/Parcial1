function exponente(n)
{
    var factorial=1;
    var constante=1
    var resultado=0
        for(var i=1; i<=n; i++)
        {
            factorial*=i;
            resultado+=constante+(1/factorial);
            constante=0;
        }
        return resultado;
}
console.log(exponente(0))