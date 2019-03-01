<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script><script>
pname=window.location.pathname
console.log(pname);
    $( document ).ready(function() {
$('#loader').addClass('loading').removeClass('loadi');
        });
$(function(){
    $.getJSON("https://raw.githubusercontent.com/gaalos/yapro/master/url.json", function(jsdata) {
        json = jsdata;
            for (var i = 0, len = json.length; i < len; i++) {

            if (json[i].origin1 == pname )
            {
                console.log('url found');
                window.location.replace(json[i].dest);
            }
            else if (json[i].origin2 == pname )
            {

                console.log('url found ')
                window.location.replace(json[i].dest);
            }
            
}
    });
});
</script>
