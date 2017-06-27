/*

    ANIMATED SCROLL TO TOP
    Thanks Qbrid for this pen
    https://codepen.io/Qbrid/pen/EgAYNg

*/


// Needed to cancel the scrolling when we are at the top of the page
let intervalId = 0;


const scrollStep = function() {

    // Check if we are at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {

        clearInterval(intervalId);

    }

    window.scroll(0, window.pageYOffset - 50);

};

const scrollToTop = function() {

    // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 16.66);

};


export default scrollToTop;