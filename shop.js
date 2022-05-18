window.onload = () => {
    document.getElementById("Hello").style.color = "pink";//am modificat culoarea
    
    document.querySelector("h1").style.color="purple";
    
    const list = document.getElementsByTagName("div")[1];
    list.getElementsByTagName("h1")[0].style.color = "pink";

    const lista = document.getElementsByClassName("cls");
    lista[0].style.fontFamily = "Calibri";
    
}
