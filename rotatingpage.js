const  Container = document.querySelector('.container')
const  ProgressContainer = document.querySelector('.progress-container')
const  Progress = document.querySelector('.progress')
const  Open = document.querySelector('.open')
const  Close = document.querySelector('.close')

Open.addEventListener('click', () =>{
    
    Container.classList.add('container-active')
    ProgressContainer.classList.add('progress-container-active')
    removeActiveClass()
})
   
function removeActiveClass(){
    
    Close.addEventListener('click', () =>{
        Container.classList.remove('container-active')
        ProgressContainer.classList.remove('progress-container-active')
        addActiveClass()
    })
}
