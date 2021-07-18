let palavra = 'arara';

function verificaPalindromo(Param)
{
    let aux = '';
    for(let index = Param.length - 1; index >= 0;index -= 1)
        aux = aux + Param[index];

    if(Param === aux)
        return true;
    else
        return false;
}

console.log(verificaPalindromo(palavra));

