let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(let n in numbers)
{
    if(numbers[n]%2 === 1)
        impar+=1;
}

if(impar > 0)
    console.log(impar + ' valores ímpares no array');
else
    console.log('nenhum valor ímpar encontrado');
