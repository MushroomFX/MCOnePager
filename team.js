var users = [
    ['preview','test','https://s.namemc.com/2d/skin/face.png?id=ace09a39f251f6bc&scale=16'],
    ['preview','test2','https://s.namemc.com/2d/skin/face.png?id=ace09a39f251f6bc&scale=16'],
    ['preview','test3','https://s.namemc.com/2d/skin/face.png?id=ace09a39f251f6bc&scale=16'],
    ['preview','test4','https://s.namemc.com/2d/skin/face.png?id=ace09a39f251f6bc&scale=16'],
    ['preview','test5','https://s.namemc.com/2d/skin/face.png?id=ace09a39f251f6bc&scale=16'],
]

for(i=0;i<users.length;i++){
    addCard(users[i])
}

var count = 0

function addCard(rank,name,img){
    count++
document.getElementById(rank+"s").innerHTML += `
<div class="cardwrapper">
    <div class="${rank} card">
        <div class="icon">
            <div class="img">
                <img src="${img}" alt="">
            </div>
        </div>
        <p class="name">${name}</p>
    </div>
</div>
`
document.getElementById(rank+"s").style.gridTemplateColumns = count
}