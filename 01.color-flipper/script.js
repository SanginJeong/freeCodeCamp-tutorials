/*
-배열에 모든 색을 저장한다.
-click me 를 누르면 Math.random() 을 이용해서 배열의 인덱스중 한개를 고른다.
-고른 컬러가 red 이면 문구에 red를 띄우고 backround-color를 red로 바꾼다.
-문구띄울때는 그 div자체를 script로 가져오고 innerHTML 을 이용한다.
-컬러 바꾸는것도 innerHTML을 이용한다.
*/

const randomColor =['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']; //length : 50 -> 0~49

const $buttonStyle = document.querySelector('.buttonStyle');
const $backgroundColor = document.querySelector('.backgroundColor');
const $pageColor = document.querySelector('.pageColor');

$buttonStyle.addEventListener('click', changeColor);

function changeColor(){
    let changedColor = '';
    let resultHTML = '';
    changedColor = randomColor[~~(Math.random()*51)];
    console.log(changedColor);

    resultHTML = `<div id="info">Background Color : ${changedColor} </div>`
    
    changePageColor(changedColor);
    $backgroundColor.innerHTML = resultHTML;
}

function changePageColor(color){
    $pageColor.style.backgroundColor = color;
}