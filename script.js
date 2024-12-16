let leg= document.getElementById("leg");
let wings=document.getElementById("wings");
let flesh=document.getElementById("flesh");
let remainingChicken=document.getElementById("remainingQuantity")
let chicken=document.getElementById("chicken");


function calculate()
{
    let result=document.getElementById("result:")
    leg.textContent= leg;
    wings.textContent=wings;
    flesh.textContent=flesh;
    let chicken;
    

    if(chicken)
    {
        let total=chicken*1000;
        let chickenWeight=leg*250+flesh*1000+wings*250;
        result.textContent=chickenWeight;
    }

 
}

function remainingQuantity()
{
    remaining=chickenWeight-total;
    remainingQuantity.textContent=remainingChicken;
    

}