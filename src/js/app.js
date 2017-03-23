// POST form data to zapier on submit
$('#myForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/1707140/msf6zi/',
        type:'post',
        data:$('#myForm').serialize(),
        success:function(){
          // Redirect to success page
          window.location = "https://www.harrycresswell.com/success";
        }
    });
});
