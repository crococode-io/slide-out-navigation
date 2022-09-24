/**
 * demo.js
 * https://www.instagram.com/croco.code/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2022, CROCO.CODE
 * https://www.instagram.com/croco.code/
 */

let menu = document.querySelector('.navigation-details-holder'),
  menuDetails1st = document.querySelector('.navigation-details-1st'),
  menuDetails2nd = document.querySelector('.navigation-details-2nd'),
  menuDetails3rd = document.querySelector('.navigation-details-3rd'),
  close1st = document.querySelector('.close span:nth-child(1)'),
  close2nd = document.querySelector('.close span:nth-child(2)'),
  menuHeadline = document.querySelector('.headline'),

  tl = new TimelineMax({ paused: true });

tl.to(menu, 0.35, { xPercent: 100, ease: Expo.easeOut })
  .to(menu, 0.65, { yPercent: -96, ease: Expo.easeOut })
  .fromTo(menuHeadline, 0.65, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: Expo.easeOut }, '-=0.35')
  .staggerTo( menuDetails1st.querySelectorAll('li'), 0.35, { autoAlpha: 1, y: -20, ease: Expo.easeOut }, 0.05 )
  .staggerTo( menuDetails2nd.querySelectorAll('li'), 0.35, { autoAlpha: 1, y: -20, ease: Expo.easeOut }, 0.05, "-=0.65" )
  .staggerTo( menuDetails3rd.querySelectorAll('li'), 0.35, { autoAlpha: 1, y: -20, ease: Expo.easeOut }, 0.05, "-=0.65" )
  .to(close1st, 0.35, { autoAlpha: 1, x: -18, y: -18, ease: Expo.easeIn }, '-=0.35')
  .to(close2nd, 0.35, { autoAlpha: 1, x: 18, y: -18, ease: Expo.easeIn }, '-=0.35')


document.querySelector('.navigation-main').addEventListener('click', function() {
  tl.play();
});

document.querySelector('.close').addEventListener('click', function() {
  tl.reverse();
});
