// JS Goes here
$('#myForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/1707140/msf6zi/',
        type:'post',
        data:$('#myForm').serialize(),
        success:function(){
          // On submit, redirect to another page
          window.location = "http://localhost:1313/success";
        }
    });
});
