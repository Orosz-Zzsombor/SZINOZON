let dots = []
let korok = [];
var szinek = ["cyan","green","yellow","blue","red","pink","orange","purple"]
var gepszine = ["cyan","green","yellow","blue"]
document.addEventListener('DOMContentLoaded', function () 
{
    var kiskorok = document.getElementById('kiskorok')
    var tarto =document.getElementById('flexbox')
    var szintarto = document.getElementById('szintarto')
   
for (let index = 0; index <10; index++) {
    var div = document.createElement('div')

    for(let i = 0; i < 4; i++){
        var dot = document.createElement('span')
        dot.classList.add('dot')
        div.appendChild(dot)
        dots.push(dot)
    }

    tarto.appendChild(div);
}
for (let index = 0; index < szinek.length; index++) {
    const element = szinek[index];
    var gomb = document.createElement('button')
    gomb.setAttribute('onclick','kattintas(this)')
    gomb.style.backgroundColor = element;
    szintarto.appendChild(gomb)   
}


}
)

let dotIndex  = 0;
function kattintas(szin)
{
    var szines = szin.style.backgroundColor
    dots[dotIndex].style.backgroundColor = szines
    dotIndex++
    if (dotIndex%4==0) {
        megnez();    
    }
    
}
function megnez()
{
    var tippeltLista = []
    tippeltLista = [dots[dotIndex-4].style.backgroundColor,dots[dotIndex-3].style.backgroundColor,dots[dotIndex-2].style.backgroundColor,dots[dotIndex-1].style.backgroundColor]
    let feketek = 0;
    let feherek = 0;
    let jelenlegIndex = 0;
    tippeltLista.forEach(element => 
    { 
        if (element==gepszine[jelenlegIndex]) {
            feketek++;
        }
        else if(gepszine.includes(element)){
            feherek++;
        }
        
        jelenlegIndex++;
        if(feketek==4){
            console.log("nyertel")
        }
        
    });


}