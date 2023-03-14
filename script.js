function generate(){
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(data=>display(data))
}




function display(data){
    document.getElementById("quote").innerText= data.quote;

}