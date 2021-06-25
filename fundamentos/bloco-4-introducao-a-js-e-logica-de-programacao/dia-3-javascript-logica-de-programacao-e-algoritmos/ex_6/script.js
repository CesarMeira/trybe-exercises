let n = 31;
let primo = true;

for(let index = 2; index < n; index += 1)
{
    if(n%index === 0)
    {
        primo = false;
        break;
    }
}
if(primo)
    console.log(n + ' é um número primo!');
else
    console.log(n + ' não é um número primo.');