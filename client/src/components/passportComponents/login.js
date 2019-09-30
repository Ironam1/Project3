$(document).ready(function(){
//==============================================
// getting reference to our forms & inputs
const loginForm = $('form.login');
const userInput = $('input#email-input');
const passwordInput = $('input#password-input');
//==============================================
// FN - validate there's an email/password, when form is submitted
loginForm.on('submit', function(event){
    event.preventDefault();
    let userData = {
        user: userInput.val().trim(),
        password: passwordInput.val().trim()
    };
    if (!userData.user || !userData.password){
        return;
    }
//==============================================
// FN - already have user/password - runs FN, clears form
    loginUser(userData.user, userData.password);
    userInput.val('');
    passwordInput.val('');
});
//==============================================
// FN - login posts to api/route/login && if successful, redirects us to the user's homepage
function loginUser(user, password){
    $.post('/api/users', {
        user: user, 
        password: password
    }).then(function(){
//==============================================
// ????? unsure if this is rendering correct route/page
        window.location.replace('/start');
// handle err
    }).catch(function(err){
        console.log(err);
    });
}
});