function somaDe1aN(param)
{
    let soma = 0;
    for(index = 1; index <= param; index += 1)
    {
        soma += index;
    }
    return(soma);
}

console.log(somaDe1aN(5));