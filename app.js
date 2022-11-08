window.onload=function(){
    let searchButton;
    let httpRequest;
    let phpResponse;
    let searchfield;

    
    searchfield = document.getElementById("superheroSearch");
    phpResponse = document.getElementsByClassName("phpResponse")[0]
    searchButton= document.getElementsByClassName("btn")[0];

    searchButton.addEventListener("click", function(){
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = showResponse;
        httpRequest.open("GET", "superheroes.php?input=" + searchfield.value);
        httpRequest.send();
        searchfield.value == "";
    })

    function showResponse(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                //alert(httpRequest.responseText);
                phpResponse.innerHTML = httpRequest.responseText;
            }
            else{
                alert("Invalid request.");
            }
        }
    }
    
}

