document.addEventListener('DOMContentLoaded' , function(){
    var YearsExperience = document.getElementById('YearsExperience')
    var countvisits = localStorage.getItem('pageViews')
    if(countvisits){
        countvisits = +countvisits +1
    }else{
        countvisits = 1
    }

    localStorage.setItem('pageViews' , countvisits)
    YearsExperience.textContent = countvisits
})

let topBtn = document.getElementById('topBtn')
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        topBtn.style.display = 'block'
    }else{
        topBtn.style.display = 'none'
    }

    topBtn.addEventListener('click' , function(){
        window.scroll({
            top:0,
            behavior:'smooth'
        })
    })
}

let teams = [
    {img: 'images/team-1.jpg' , name: 'Full Name' , job: 'Baker'},
    {img: 'images/team-4.jpg' , name: 'Full Name' , job: 'Baker'},
    {img: 'images/team-3.jpg' , name: 'Full Name' , job: 'Baker'},
    {img: 'images/testimonial-1.jpg' , name: 'Full Name' , job: 'Baker'},
]

let ourTeam = document.getElementById('ourTeam')
teams.forEach(function(item){
    var card = document.createElement('div')
    card.className = 'card'

    var img = document.createElement('img')
    img.src = item.img

    var name = document.createElement('h4')
    name.textContent = item.name

    var job = document.createElement('p')
    job.textContent = item.job

    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(job)

    ourTeam.appendChild(card)
})