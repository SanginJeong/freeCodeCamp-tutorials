const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener('click',(e)=>{
  const id = e.target.dataset.id;
  console.log(id);
  // 클릭했으니까 id 가 저장됨
  if(id){
    btns.forEach(button=>{button.classList.remove('active')})
    e.target.classList.add('active');

    articles.forEach(article=>{
      article.classList.remove('active');
    })
    const element = document.querySelector(`#${id}`);
    element.classList.add('active');
    console.log(element);
  }
})