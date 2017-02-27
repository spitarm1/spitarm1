var formdata = new FormData($('file'));
$.ajax({
url: "YUR URL!",
data: formdata,
type: 'POST',
processData: false,
contentType: false,
success: function(res){}
})
