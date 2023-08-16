let par = document.querySelector(".shuffle");
let per = document.querySelector(".container-image")
let child = [per.children[0] ,per.children[1] ,per.children[2] ,per.children[3] , per.children[4] ,per.children[5] ,per.children[6] ,per.children[7]]
 let btn=[par.children[0] ,par.children[1],par.children[2],par.children[3]] ;
btn[0].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
    par.children[i].classList.remove('active');   
    }
    btn[0].classList.add('active');
    for(let i=0 ; i<=child.length ;i++)
    child[i].style.display="block";
})
btn[1].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
    par.children[i].classList.remove('active');   
    }
    btn[1].classList.add('active');
    for(let i=0 ; i<=child.length ;i++)
        if( i<=2){child[i].style.display="block";}
        else{child[i].style.display="none";}
})
btn[2].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
    par.children[i].classList.remove('active');   
    }
    btn[2].classList.add('active');
    for(let i=0 ; i<=child.length ;i++)
        if(i>2 && i<=5){child[i].style.display="block";}
        else{child[i].style.display="none";}
})
btn[3].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
    par.children[i].classList.remove('active');   
    }
    btn[3].classList.add('active');
    for(let i=0 ; i<=child.length ;i++)
        if(i>5 && i<=7){child[i].style.display="block";}
        else{child[i].style.display="none";}
})
let box = document.querySelector(".plans");

box.children[0].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
        box.children[i].classList.remove('active');   
    }
    box.children[0].classList.add('active');
})
box.children[1].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
        box.children[i].classList.remove('active');      
    }
    box.children[1].classList.add('active');
})
box.children[2].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
        box.children[i].classList.remove('active');     
    }
    box.children[2].classList.add('active');
})
box.children[3].addEventListener('click',() => {
    for(let i=0 ; i<=3 ;i++)
    {
        box.children[i].classList.remove('active');     
    }
    box.children[3].classList.add('active');
})