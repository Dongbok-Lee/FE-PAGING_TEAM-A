
let answer = data.answer; 
let index = 0; 
let user_answer = []; 
let correct = 0; 


const quiz = () => {
    document.getElementById('game').style.display = 'none';
    document.getElementById('over').style.display = 'none';
}

quiz();

const start_quiz = () => {
    document.getElementById('start').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    set_quiz();
}


const set_quiz = () => {

    document.querySelector('.question').innerText = data.quiz[index].question;
    const option = data.quiz[index].option;

    for(var i = 0; i < 4; i++){
        document.querySelector('.option:nth-child('+(i+1)+')').innerText = option[i];
    }

}


const next_quiz = (choice) =>{

    user_answer[index] = choice;

    if(index == 19){
        for(var i = 0; i < 20; i++){
            if(answer[i] == user_answer[i])
                correct++;
        }
        
        result(correct);
    }

    index++;
    set_quiz();
}

const result = (correct) => {
    document.getElementById('game').style.display = 'none';
    document.getElementById('over').style.display = 'block';
    
    if(correct <= 5){
        document.querySelector('.result').innerText = '당신은 마알못입니다.'
        document.querySelector('.result_text').innerText = '마블 시네마틱 유니버스에 관심이 없으시군요.. '
        document.querySelector('.result_count').innerText = '맞힌 개수: ' + correct + '개'
    } else if(correct <= 10){
        document.querySelector('.result').innerText = '당신은 마블 일반인입니다.'
        document.querySelector('.result_text').innerText = '마블 시네마틱 유니버스에 조금 관심이 있으시군요!'
        document.querySelector('.result_count').innerText = '맞힌 개수: ' + correct + '개'
    } else if(correct <= 17){
        document.querySelector('.result').innerText = '당신은 마블 덕후입니다.'
        document.querySelector('.result_text').innerText = '마블 시네마틱 유니버스에 관심이 많으시군요! '
        document.querySelector('.result_count').innerText = '맞힌 개수: ' + correct + '개'
    } else {
        document.querySelector('.result').innerText = '당신은 마블 찐덕후입니다.'
        document.querySelector('.result_text').innerText = '진정한 마블 시네마틱 유니버스 덕후시군요! '
        document.querySelector('.result_count').innerText = '맞힌 개수: ' + correct + '개'
    }
}