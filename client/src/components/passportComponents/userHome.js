$(document).ready(function(){
//==============================================
//this file's only purpose(GET)request to handle which user is logged in
//then updates html on page
    $.get('/api/user_data')
        .then(function(data){
            $('.user-name').text(data.user);
        });
});