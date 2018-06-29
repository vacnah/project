$(document).ready(function () {

    var i = 0;
    var j =0;
    var k =0;

    var arr=['hayko.png','hayko-drosh.png'];
    var arr2=['katarir.png','pahanjir.png','shahir.png'];
    var arr3 =['320btn.png','320btn2.png'];

    setInterval(function () {

        $('#image').attr('src','img/' + arr[i]);


        i++;
        if(i === arr.length){
            i = 0;
        }

        $('#text').attr('src','img/'+arr2[j]);

        j++;

        if(j === arr2.length){
            j = 0;

        }

        $('#toto-loto').attr('src','img/'+ arr3[k]);
        k++;

        if(k === arr3.length){
            k = 0;
        }



        var div_loto =$('.loto');
        var div_text=$('.ip');
        var ipx = $(' .ipx ');


        if(j == 2){
            div_loto.css('display','block');
            div_text.css('display','none');
            ipx.css('display','none');


            // console.log(div_loto);
        }else {
            ipx.css('display','block');
            div_loto.css('display','none');
            div_text.css('display','block');
        }





    },3500);






});

