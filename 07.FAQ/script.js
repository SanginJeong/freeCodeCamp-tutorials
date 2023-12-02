const btn = document.querySelectorAll('.question-btn');
console.log(btn);
btn.forEach(button=>{
  button.addEventListener('click',(event)=>{
    const question = event.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text');
    console.log(question);
  })
})