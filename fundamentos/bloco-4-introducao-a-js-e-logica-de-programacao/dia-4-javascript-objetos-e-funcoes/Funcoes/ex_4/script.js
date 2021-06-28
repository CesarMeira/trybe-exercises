function maiorNome(param)
{
    let chars = 0;
    let indice;

    for(let key in param)
    {
        if(param[key].length > chars)
        {
            chars = param[key].length;
            indice = key;
        }
    }
    return(param[indice]);
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));