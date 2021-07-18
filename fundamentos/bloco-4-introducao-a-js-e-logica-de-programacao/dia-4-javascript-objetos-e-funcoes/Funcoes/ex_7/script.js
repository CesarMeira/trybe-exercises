function verificaFimPalavra(word, ending)
{
    for(index = 1; index <= word.length; index += 1)
    {
        if(ending[ending.length-1] !== word[word.length-1])
        {
            return false;
        }
    }

    return true;
}

console.log(verificaFimPalavra('joaofernando', 'fernan'));