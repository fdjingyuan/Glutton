// signup.js
// return jsonify({"status": 0, 
// "customer_id": customer_id,  
// "customer_nickname": customer_nickname, 
// "customer_mobile_number": customer_mobile_number, 
// "customer_address": customer_address, 
// "customer_discription": customer_discription, 
// "customer_gender": customer_gender, 
// "customer_appellation": customer_appellation})

var who = 'customer';
var signin = function() {
    var password = $("input[name='password']").val();
    var mobile = $("input[name='login']").val();
    alert("who"+who);
    alert("password"+password);
    alert("mobile"+mobile);
    $.getJSON('/signin/_submit',{"customer_password":password,"customer_mobile_number":mobile,"who":who},function(data){
        if (data.ERROR) {
            alert(data.ERROR);
        } else {
            if (who == 'business') {
                window.location.href="owner_home_page?restaurant_id="+data.restaurant_id+
                "&owner_nickname="+data.owner_nickname+
                "&restaurant_name="+data.restaurant_name+
                // '&customer_mobile_number='+data.customer_mobile_number+
                // "&customer_discription="+data.customer_discription+
                "&restaurant_address="+data.restaurant_address+
                "&restaurant_description="+data.restaurant_description;
                "$who"+who;
            } else {
            window.location.href="home_page?customer_id="+data.customer_id+
                "&customer_nickname="+data.customer_nickname+
                '&customer_mobile_number='+data.customer_mobile_number+
                "&customer_nickname="+data.customer_nickname+
                "&customer_discription="+data.customer_discription+
                "&customer_address="+data.customer_address;
                "$who"+who;
            }
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
            $("h1").children("strong").html('Sign in as owner');
        } else {
            
        }
        $("span#picture_nickname").html(nickname);
        $("span#USER_ID").html(customer_id);
    }
})