
// FUNCTION - OPEN MENU
function openMenu(){            
    let menuContent = document.querySelector(".menu-content");
    var open = false;

    // Event for OPEN & CLOSE MENU
    document.querySelector("#open-menu").addEventListener("click",function(){                
        if(open == false){            
            menuContent.style.width = "150px";                                                            
            open = true;
        
        }else if(menuContent.style.width != 0){            
            menuContent.style.width = 0;                              
            open = false;
        }
    })        
}
openMenu();

// FUNCTION - SELECT SESSION ON CLICK & SLIDER
function linkSelect(){
    let links = document.querySelectorAll(".acess a");
    let sessions = document.querySelectorAll(".infos");    
    let btns = document.querySelectorAll(".btns-slider button")        
    let content = document.querySelectorAll(".page-content div");

    function focus(){
        sessions.forEach(sessions => {
            sessions.animate([
                {opacity: "0"},{opacity: "100%"},                                
            ],{                
                duration: 500
            })
        });
    }
    
    for(let i=0;i < links.length;i+=1){
        
        // CLICK in session links
        links[i].addEventListener("click",function(){                                                                        
            sessions.forEach(sessions => {
                sessions.style.display = "none";
            })
            sessions[i].style.display = "inline-block";                                                            
            focus();
            
            btns.forEach(btns =>{
                btns.style.background = "#fff";
            })            
            btns[i].style.background = "#0c2acf";                        
            clearInterval(btnsAnimation);

            content.forEach(content =>{
                content.style.border = "none";
                content.style.opacity = "50%";
            })
            content[i].style.border = "2px solid #fff";            
            content[i].style.borderBottom = "50px solid #fff";
            content[i].style.opacity = "100%";
        });

        // CLICK in buttons           
        btns[i].addEventListener("click",function(){
            btns.forEach(btns => {
                btns.style.background = "#fff";
            })
            btns[i].style.background = "#0c2acf";
            focus();

            sessions.forEach(sessions => {
                sessions.style.display = "none";
            })
            sessions[i].style.display = "inline-block";
            clearInterval(btnsAnimation);
        })        
    }
    
    // SLIDER buttons & sessions            
    var i = 1;                    
    if(i == 1){
        sessions[0].style.display = "inline-block";
        btns[0].style.background = "#0c2acf";
    }

    function colorBtns(){                
        btns.forEach(btns => {
            btns.style.background = "#fff";                                    
        })                        
        sessions.forEach(sessions =>{
            sessions.style.display = "none";            
        })        
        focus();
        
        btns[i].style.background = "#0c2acf";                
        sessions[i].style.display = "inline-block";
        i += 1;                        

        if(i == btns.length){
            i = 0;        
        }
    }        
        
    var btnsAnimation = setInterval(colorBtns,3000);            
        
}
linkSelect();

// FUNCTION - VIEW CONTACT ON CLICK
function contactView(){
    let open = document.querySelector("#link-contact");
    let contact = document.querySelector(".contact");
    let close = document.querySelector(".contact #close-contact");    

    open.addEventListener("click",function(){                                
        contact.style.height = "100px";        
    })

    close.addEventListener("click",function(){                
        contact.style.height = "0";        
    })
}
contactView();

// FUNCTION - VIEW INFORMATIONS IN ABOUT
function aboutView(){
    let open = document.querySelector("#link-about");
    let about = document.querySelector(".about");
    let close = document.querySelector(".about #close-about");    

    open.addEventListener("click",function(){        
        about.style.display = "block"; 
        document.querySelector("body").style.overflow = "hidden";
    })

    close.addEventListener("click",function(){
        about.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    })
}
aboutView();