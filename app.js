window.onload=function(){
    let searchButton;
    let httpRequest;

    searchButton= document.getElementsByClassName("btn")[0];

    searchButton.addEventListener("click", function(){
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = showList;
        httpRequest.open("GET", "superheroes.php");
        httpRequest.send();
    })

    function showList(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                alert(httpRequest.responseText);
            }
            else{
                alert("Invalid request.");
            }
        }
    }
}

