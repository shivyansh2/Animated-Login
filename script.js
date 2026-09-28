function flipCard(){
  const card = document.querySelector('#authCard');
  card.classList.toggle('flipped')
}

function togglePassword(id, button){
  const input = document.querySelector('#id');
  if(input.type === "password"){
    input.type = "text";
    document.querySelector("#falcon").classList.remove("fa-eye")
    document.querySelector("#falcon").classList.add("fa-eye-slash")
  }else{
    input.type = "password"
    document.querySelector("#falcon").classList.remove("fa-eye-slash")
    document.querySelector("#falcon").classList.add("fa-eye")
  }
}

document.querySelectorAll("form").forEach(form =>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const button = this.querySelector('.main-btn');
    const oldText = button.textContent;

    button.textContent = "Success";
    setTimeout(()=>{
      button.textContent = oldText;
    },1800)
  })
})