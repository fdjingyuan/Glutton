// signup.js
var customer_id = "";
var who = "";
var signup = function() {
    alert("who"+who);
	customer_nickname = $("input[name='user[login]']").val();
    customer_password = $("input[name='user[password]']").val();
    customer_mobile_number = $("input[name='user[email]']").val();
    alert("get from html:"+customer_nickname + customer_password + customer_mobile_number);
    $.getJSON('/signup/_submit',{"customer_password":customer_password,"customer_mobile_number":customer_mobile_number,"customer_nickname":customer_nickname,"who":who},function(data){
        console.log('sent:'+customer_password+customer_mobile_number+customer_nickname);
        alert("getdata"+data);
        if (data.ERROR) {
            alert(data.ERROR);
        } else {
            customer_id = data.customer_id;
            window.location.href = 'home_page?customer_id='+customer_id+'&customer_nickname='+customer_nickname+"&who="+who;
        }
    });
}

$(document).ready(function(){
    var url = location.search;
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        who = str.split("&")[0].split("=")[1];
        if (who=='business'){
            who = "restaurant";
            var owner = true;
            $("h1").html('Sign up as owner');
            $("a#navi.selected").attr("class","js-selected-navigation-item nav-item");
            $("a[name='Business']").attr("class",'js-selected-navigation-item nav-item selected');
        } else {
        }
    }
})