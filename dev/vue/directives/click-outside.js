
/*
    CLICK OUTSIDE ELEMENT DIRECTIVE
*/


import Vue from 'vue';

Vue.directive('click-outside', {

    bind(el, binding, vnode) {

        var trigger = function (event) {

            //check if user is not clicking on the host element || any of its children
            if (!(el == event.target || el.contains(event.target))) {

                // FIRE IT!
                vnode.context[binding.expression](event);

            }

        };

        // WATCH FOR CLICKING AROUND
        document.body.addEventListener('click', trigger);
        document.body.addEventListener('touchstart', trigger);

    },


    unbind() {

        //STOP WATCHING IT! #perfomanceMatters
        document.body.removeEventListener('click', trigger);
        document.body.removeEventListener('touchstart', trigger);

    }


});