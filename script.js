function flipCard(){
  const card = document.querySelector('#authCard');
  card.classList.toggle('flipped')
}

function togglePassword(id, button){
  const input = document.getElementById(id);
  if(input.type === "password"){
    input.type = "text";
    button.querySelector("i").classList.remove("fa-eye")
    button.querySelector("i").classList.add("fa-eye-slash")
  }else{
    input.type = "password"
    button.querySelector("i").classList.remove("fa-eye-slash")
    button.querySelector("i").classList.add("fa-eye")
  }
}

document.querySelectorAll("form").forEach(form =>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const button = form.querySelector('.main-btn');
    const oldText = button.textContent;

    button.textContent = "Success";
    setTimeout(()=>{
      button.textContent = oldText;
    },1800)
  })
})
