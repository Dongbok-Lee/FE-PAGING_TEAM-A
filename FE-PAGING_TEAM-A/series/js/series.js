var index = 1;

const next = () =>{
    slide_next_card();
}

const previous = () =>{
    slide_previous_card();
}

const slide_next_card = () => {


    if(index == 4){
        $('.carousel_text').text('페이즈 1');
        $('section').css('background-image', 'url(./img/back1.png)');
    }
    else{
        $('.carousel_text').text('페이즈 '+(index+1));
        $('section').css('background-image', 'url(./img/back'+(index+1)+'.png)');
    }

    $('.main_contents > div:nth-child(1)').remove();

    if(index > 1){
        var card =  '<div class = "'+"card" + (index-1) +'"OnClick="location.href =\'./faze_'+ (index-1) +'.html\'"><img class = "center_img" src="./img/p'+(index-1)+'.png" alt="캐러셀이미지"></div>';
        $('.main_contents').append(card);
    }else{
        var card =  '<div class = "'+"card" + (index+3) +'"OnClick="location.href =\'./faze_'+ (index+3) +'.html\'"><img class = "center_img" src="./img/p'+(index+3)+'.png" alt="캐러셀이미지"></div>';
        $('.main_contents').append(card);
    }
    active_next_circle();
}

const slide_previous_card = () => {


    if(index == 1){
        $('.carousel_text').text('페이즈 4');
        $('section').css('background-image', 'url(./img/back4.png)');
    }
    else{
        $('.carousel_text').text('페이즈 '+(index-1));
        $('section').css('background-image', 'url(./img/back'+(index-1)+'.png)');
    }

        $('.main_contents > div:nth-child(5)').remove();

    if(index > 3){
        var card =  '<div class = "'+"card" + (index-3) +'"OnClick="location.href =\'./faze_'+ (index-3) +'.html\'"><img class = "center_img" src="./img/p'+(index-3)+'.png" alt="캐러셀이미지"></div>';
        $('.main_contents').prepend(card);
    }else{
        var card =  '<div class = "'+"card" + (index+1) +'"OnClick="location.href =\'./faze_'+ (index+1) +'.html\'"><img class = "center_img" src="./img/p'+(index+1)+'.png" alt="캐러셀이미지"></div>';
        $('.main_contents').prepend(card);
    }
    active_previous_circle();
}

const active_next_circle = () =>{
    document.querySelector(".c"+index).classList.remove("active_circle");

    if(index >= 4){
        index = 1;
    }else{
        index++;
    }

    document.querySelector(".c" + index).classList.add("active_circle");
}

const active_previous_circle = () =>{
    document.querySelector(".c"+index).classList.remove("active_circle");

    if(index <= 1){
        index = 4;
    }else{
        index--;
    }

    document.querySelector(".c" + index).classList.add("active_circle");
}