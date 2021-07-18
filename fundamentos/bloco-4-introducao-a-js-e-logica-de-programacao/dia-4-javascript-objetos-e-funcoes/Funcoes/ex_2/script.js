function indiceDeMaiorValor(param)
{
    let maiorValor = 0;
    let indice;
    for(let key in param)
    {
        if(param[key] > maiorValor)
        {
            maiorValor = param[key];
            indice = key;
        }
    }
    return indice;
}

console.log(indiceDeMaiorValor([2, 3, 6, 7, 10, 1]));