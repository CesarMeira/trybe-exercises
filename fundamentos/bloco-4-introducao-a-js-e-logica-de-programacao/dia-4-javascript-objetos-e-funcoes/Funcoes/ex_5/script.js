function inteiroMaisFrequente(param)
{
    let numero;
    let repeticoes = 0;

    for(let key in param)
    {
        let contador = 0;
        for(index = 0; index < param.length; index += 1)
        {
            if(param[key] === param[index])
                contador += 1;
        }
        if(contador > repeticoes)
        {
            repeticoes = contador;
            numero = param[key];
        }
    }

    return(numero);
}

console.log(inteiroMaisFrequente([2, 3, 2, 5, 8, 2, 3]));