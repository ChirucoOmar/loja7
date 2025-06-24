var MenuItens = document.getElementById("MenuItens");
MenuItens.style.maxHeight = "0px" //ira esconder os itens
function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}