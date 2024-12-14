$(function($) {

    $("#knob-1").knob({
        change : function (value) {
            console.log(Math.round(value));
            
            // Math.round um nur gerade werte zu bekommen
            // Value geht von 0-100. Um das in Grad für die Drehung umzuwandeln Value*3.6 -> 0-360 ;)
            $('#demo1 img').css('transform','rotate(' + Math.round(value*3.6)+ 'deg)'); 
            
            // Bissi Mathe um Richtung umdrehen. 
            // Wenn Value eig. 95 wäre und 5 sein soll -> 100-95 = 5 ;)
//            $('#demo1 .value, #demo1 .value2').text(Math.round(100-value)); 
            var value100 = Math.round(100-value);
            
            if (value100 == 100) {
                $('#demo1 .value, #demo1 .value2').text("0");
            } else if (value100 == 0) {
                $('#demo1 .value, #demo1 .value2').text("0");
            } else {
                $('#demo1 .value, #demo1 .value2').text(Math.round(100-value));
            }               
            
            
            
        },
        release : function (value) {
            $('#demo1 img').css('transform','rotate(' + Math.round(value*3.6)+ 'deg)');
            //$('#demo1 .value, #demo1 .value2').text(Math.round(100-value));
            var value100 = Math.round(100-value);

            if (value100 == 100) {
                $('#demo1 .value, #demo1 .value2').text("0");
            } else if (value100 == 0) {
                $('#demo1 .value, #demo1 .value2').text("0");
            } else {
                $('#demo1 .value, #demo1 .value2').text(Math.round(100-value));
            }   
        },
        cancel : function () {
            console.log("cancel : ", this);
        }
    });
    $("#knob-2").knob({
        change : function (value) { // BEIM drehen
            console.log(Math.round(value));
            $('#demo2 img').css('transform','rotate(' + Math.round(value*3.6)+ 'deg)');
            $('#demo2 .value, #demo2 .value2').text(Math.round(100-value));
        },
        release : function (value) { // NACH drehen
            $('#demo2 img').css('transform','rotate(' + Math.round(value*3.6)+ 'deg)');
            $('#demo2 .value, #demo2 .value2').text(Math.round(100-value));
        },
        cancel : function () { // KEINE AHNUNG
            console.log("cancel : ", this);
        }
    });

});