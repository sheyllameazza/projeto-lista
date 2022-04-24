$.support.cors = true;

$(document).ready(
    function(){
        $('main').load("./pages/pagina01.html")
    }
)
$('#btn-a').click(
    function(){
        $('main').load("./pages/pagina01.html")
    }
)

$('#btn').click(
    function(){
        $('main').load("./pages/pagina02.html")  
    }
)