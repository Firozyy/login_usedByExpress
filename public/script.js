$("#nameError").hide();
$("#passerrer").hide();




function NameValidation() {

    let forName = $("#username").val();

    if (forName == null || forName == '') {


        $("#nameError").show();
        $("#nameError").html("Please Enter Your Name");
        $("#username").css("border-bottom", "solid 2px #FF0000");
        return false;
    }
    else if (forName.length < 2) {
        $("#nameError").show().text("Enter a valid name");
        $("#nameError").css("color", "red");
        $("#username").css("border-bottom", "solid 2px #FF0000");

        return false;
    }
    else {
        $("#nameError").hide();
        $("#username").css("border-bottom", "solid 2px #00FF00");
        return true;


    }




}
function passValidation() {

    let forpass = $("#password").val();

    var validRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (forpass.match(validRegex)) {

        $("#passerrer").hide();
        $("#password").css("border-bottom", "solid 2px #00FF00");

        return true;

    } else if (forpass == null || forpass == '') {

        $("#passerrer").show();
        $("#passerrer").html("Please Enter Your Email");
        $("#password").css("border-bottom", "solid 2px #FF0000");

        return false;
    }
    else {

        $("#passerrer").show();
        $("#passerrer").html("Please Enter Your Valid Email");
        $("#password").css("border-bottom", "solid 2px #FF0000");


        return false;

    }


}



// $("#contactForm").submit(function (e) {
//     e.preventDefault();

//     if ( NameValidation()===true && passValidation()===true) {
//         window.location.replace("/login_success.html")
//     }
   


// });