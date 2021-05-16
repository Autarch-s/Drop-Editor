import gsap, { Expo } from 'gsap'

export function createListAnimation(list){
    const tl = gsap.timeline();
    tl.to(list, {scale: 1, duration: .25, ease: 'power4.easeIn'})
        .set(list, {zIndex: 0})
} 

export function moveListAnimation(list){
    const listHeight = parseInt(window.getComputedStyle(list).getPropertyValue('height'));
    const tl = gsap.timeline();
    tl.set(list, {y:listHeight})
        .to(list, {y:0, duration: .55, ease: 'power1.easeOut'})
} 

export function removeListAnimation(list, handleDelete){
    const tl = gsap.timeline();
    tl.to(list, {onComplete: handleDelete, scale: 0.5, autoAlpha:0,  duration: .25, ease: 'power4.easeIn'})
}

export function removeElementAnimation(element, handleDelete){
    const tl = gsap.timeline();
    tl.to(element, {onComplete: handleDelete, scaleY: 0, autoAlpha:0, duration: .25, ease: 'power4.easeIn'})
}

export function createElementAnimation(element){
    let randomShowTime = Math.floor(Math.random() * (300 - 100)) + 100;
    setTimeout(()=>{
        const tl = gsap.timeline();
        tl.to(element, {autoAlpha:1, scale: 1, duration: .3, ease: 'power4.easeOut'})
    }, randomShowTime)
} 

export function shakeElement(element){
    const tl_Shaking = gsap.timeline({repeat: 0, yoyo: true});
    tl_Shaking
            .to(element, {rotation: 2, duration: .1})
            .to(element, {rotation: -2, duration: .1})
            .to(element, {rotation: 2, duration: .1})
            .to(element, {rotation: 0, duration: .1})
} 



