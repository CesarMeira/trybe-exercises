let n = 21;
let text = '';
let center = Math.ceil(n/2);

if(n%2 == 1)
{
    for(let index = 0; index < center; index += 1)
    {
        for(let innerIndex = 0; innerIndex <= n; innerIndex += 1)
        {
            if((innerIndex >= center-index) && (innerIndex <= center+index))
                text = text + '*';
            else
                text = text + ' ';
        }
        console.log(text);
        text = '';
    }
}

