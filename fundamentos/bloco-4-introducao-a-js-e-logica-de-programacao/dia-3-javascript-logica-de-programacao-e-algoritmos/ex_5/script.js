let n = 21;
let center = Math.ceil(n/2);
let text = '';

for(let index = 0; index < center; index += 1)
{
    for(let innerIndex = 1; innerIndex <= n; innerIndex += 1)
    {         
        if((innerIndex === (center - index)) || (innerIndex === (center + index)) || (index === center-1))
            text = text + '*';
        else
            text = text + ' ';
    }
    console.log(text);
    text = '';
}