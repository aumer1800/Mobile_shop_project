// carousel

const slider=document.querySelector('.slider')
const container=document.querySelectorAll('.container')
const previous_btn=document.querySelector('.previous')
const next_btn=document.querySelector('.next')


let current_index=0
function updatesSlider(){
    const slidewidth = container[0].clientWidth
    slider.style.transform=`translateX(-${current_index * slidewidth}px)`
}

next_btn.addEventListener('click',()=>{
    if(current_index < container.length-1){
        current_index ++
        updatesSlider()
    }
})

previous_btn.addEventListener('click',()=>{
    if (current_index > 0){
        current_index --
        updatesSlider()
    }
})

window.addEventListener('resize',updatesSlider)