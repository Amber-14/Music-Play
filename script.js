window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll('.sounds')
    const fotters = document.querySelectorAll('.fotter div')
    const visual = document.querySelector('.visual')
    const colors = ['#60d394','#d36060','#c060d3','#d3d160','#200312','#98ee0e']

    console.log(sounds)

    // addingsound 
    fotters.forEach((div,index)=>{
        div.addEventListener('click',function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index)
        })
    })
    // create ules

    const createBubbles = (index)=>{
        const bubble = document.createElement('div')
        visual.appendChild(bubble);

        bubble.style.backgroundColor=colors[index]
        bubble.style.animation = 'jump 2s ease-in-out';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this)
        })
    }
})