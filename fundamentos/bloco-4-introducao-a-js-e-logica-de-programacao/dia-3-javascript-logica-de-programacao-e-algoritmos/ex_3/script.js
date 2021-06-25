let n = 7;
let text = '';
let pos = n;

for(let index = 0; index < n; index += 1)
{
    for(innerIndex = 0; innerIndex <= n; innerIndex += 1 )
    {
        if(innerIndex < pos)
            text = text + ' ';
        else
            text = text + '*';
    }
    console.log(text);
    text = '';
    pos -= 1;
}
