let n = 9;
let text = '';

if(n >= 1)
{
    for(let index = 0;index < n; index += 1)
        text = text + '*';

    for(let index = 0;index < n; index += 1)
        console.log(text);
}
