
let img_round_arr = [];
let hero_text_arr = ['스칼렛위치', '가모라' ,'블랙위도우', '샹치', '비전', '블랙팬서' ,'네뷸라' ,'캡틴아메리카' ,'호크아이', '맨티스', '앤트맨', '로켓라쿤', '스파이더맨', '드랙스', '팔콘', '워머신', '닥터스트레인지', '로키' ,'윈터솔져' ,'오코예' ,'타노스' ,'발키리' ,'슈리', '토르',  '헐크' ,'헤임달' ,'스타로드' ,'웡' ,'그루트', '도르마무' ,'아이언맨', '캡틴마블'];
let round = 32;
let battle = 1;
let first_img= 0, second_img = 1;


const worldcup = () => {
    document.getElementById('game').style.display = 'none';
    document.getElementById('over').style.display = 'none';
}

worldcup();

const init = () =>{

    document.getElementById('start').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    round = 32; battle = 1;
    first_img= 0, second_img = 1;

    for(var i = 0; i < 32; i++)
        img_round_arr[i] = 32; 
    
    set_Img(0, 1); 

    document.querySelector('.round').innerText = round +'강 ' + ((battle) + '/'+(round/2)); 
}


const set_Img = (img1, img2) =>{

    document.querySelector('.img1 > img').setAttribute('src', './img/' + hero_text_arr[img1]+'.jpg' );
    document.querySelector('.img2 > img').setAttribute('src', './img/' + hero_text_arr[img2]+'.jpg' );
    
    document.querySelector('.hero1').innerText = hero_text_arr[img1];
    document.querySelector('.hero2').innerText = hero_text_arr[img2];
}


const next_battle = (select, non_select)  => {

    if(round == 1){
        document.getElementById('game').style.display = 'none';
        document.getElementById('over').style.display = 'block';
        document.querySelector('.result').innerText = '당신의 최애 캐릭터는? ';
        document.querySelector('.result_hero').innerText = hero_text_arr[select];
        document.querySelector('.result_img').setAttribute('src', './img/'+ hero_text_arr[select] + '.jpg'); 
        return;
    }

    battle++; 

    if(round == 2) document.querySelector('.round').innerText =  '결승';
    else document.querySelector('.round').innerText =  round +'강 ' + ((battle) + '/'+(round/2));

    denote_Winner(select,non_select);

    set_Next_Battle();
    
    if(battle == round/2){
        round /= 2;
        battle = 0;
    }
}

const denote_Winner = (winner,loser) =>{
    img_round_arr[winner] /= 2; 
    img_round_arr[loser] = false; 
}


const set_Next_Battle = () =>{

    var tmp;

    for(var i = 0; i < 32; i++){
        if(round == img_round_arr[i]){
            first_img = i;
            tmp = i;
            break;
        }
    }

    for(var i = tmp+1; i < 32; i++){
        if(round == img_round_arr[i]){
            second_img = i;
            break;
        }
    }

    set_Img(first_img,second_img);
}

