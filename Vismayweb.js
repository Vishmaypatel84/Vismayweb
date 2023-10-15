const words = ["Vismay"," a Developer",]

let cursor = gsap.to("#cursor",{opacity:0,ease:"power2.inOut",repeat:-1})

let mastertl = gsap.timeline({repeat:-1})

words.forEach(word => {
    let tl = gsap.timeline({repeat:1,yoyo:true,repeatDelay:1})
    tl.to("#text",{duration:1,text:word})
    mastertl.add(tl)
    
});