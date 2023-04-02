const toggleBtn = document.querySelector('.toggle_btn')
const secondBox = document.querySelector('.second_box')
const thirdBox = document.querySelector('.third_box')

toggleBtn.addEventListener('click' ,()=>{
    secondBox.classList.toggle('active')
    thirdBox.classList.toggle('active')
});