function indiceDeMenorValor(param)
{
    let menorValor = 99999999;
    let indice;
    for(let key in param)
    {
        if(param[key] < menorValor)
        {
            menorValor = param[key];
            indice = key;
        }
    }
    return indice;
}

console.log(indiceDeMenorValor([2, 4, 6, 7, 10, 0, -3]));