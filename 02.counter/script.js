/*
- number 태그를 가져온다. 나중에는 textContent로 값을 바꿔줄꺼임
- 버튼태그들을 한번에 가져온다.
- increase 버튼을 누르면 number를 1 증가시킨다.
- reset을 누르면 0으로 초기화 된다.
- decrease 버튼을 누르면 number를 1 감소시킨다.
- 만약 number.textContent 의 값이 양수이면 color : chartreuse, 음수이면 color : red
*/
let count=0;
const $number = document.querySelector('#number');
const $btn = document.querySelectorAll('.btn');

console.log($btn);

$btn.forEach(v=>v.addEventListener('click', function(event){
        const styles =event.currentTarget.classList;
        if(styles.contains("btnDecrease")){
            count--;
        }
        else if(styles.contains("btnIncrease")){
            count++;
        }
        else count = 0;
        if(count > 0)
            $number.style.color = 'chartreuse';
        else if (count < 0)
            $number.style.color = 'red';
        else $number.style.color = 'black';
        $number.textContent = count;
    })
)

/*아래는 내가 처음 풀었던 풀이
const $number = document.querySelector('#number');
const $btnDecrease = document.querySelector('.btnDecrease');
const $btnReset = document.querySelector('.btnReset');
const $btnIncrease = document.querySelector('.btnIncrease');

let numberContent = +$number.textContent

console.log(numberContent);

$btnIncrease.addEventListener('click',function (){
    numberContent++;
    console.log(numberContent);
    $number.textContent = numberContent;
    checkNumber();
});

$btnDecrease.addEventListener('click', function(){
    numberContent--;
    console.log(numberContent);
    $number.textContent = numberContent;
    checkNumber();
})

$btnReset.addEventListener('click', function(){
    numberContent = 0;
    console.log(numberContent);
    $number.textContent = numberContent;
    checkNumber();
})

function checkNumber(){
        if(numberContent > 0){
        $number.style.color = 'chartreuse';
    }
    else if(numberContent < 0){
        $number.style.color = 'red'
    }
    else  $number.style.color = 'black'
}*/