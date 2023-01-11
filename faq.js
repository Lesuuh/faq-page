const questions = document.querySelectorAll(".questions");

questions.forEach(function(question){
    const btn = question.querySelector(".btn");
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("active");
            }
        })
        question.classList.toggle("active");
    })
})