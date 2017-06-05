import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {


        features: [

            {

                name: "communication",
                description: "I realize the importance of good communication. I use tools like <a href='https://slack.com/' target='_blank'>Slack</a> to make sure we’re always on the same sintony.",

            },

            {

                name: "timekeeping",
                description: " I value my clients' time and always aim to work efficiently. I account-for and track everything I do using services such as <a href='https://toggl.com/' target='_blank'>Toggl</a>."

            },

            {

                name: "management",
                description: "I think it’s important to identify the discrete stages of a project and work to a schedule around those.",

            },

            {

                name: "collaboration",
                description: "I play well with others. I’m happy to integrate into your existing team to help get your project implemented.",

            },

            {

                name: "development",
                description: "On a technical level, I am in the market for more than 6 years, I like to think I can create anything [on the web] using my skills. Of course, as a self taught I know that there are always things to learn and improve",

            },

            {

                name: "design",
                description: "While I’m not a web designer, I have an appreciation and eye for good design. I’m comfortable using Photoshop, Illustrator and Sketch and can take designs from mock-up to implementation.",

            },

            {

                name: "organisation",
                description: "I believe it’s important to stay organised while working remotely. I Like to use <a href='https://trello.com/' target='_blank'>Trello</a> to help keep projects on-track and under control.",

            },

            {

                name: "documentation",
                description: "Often overlooked, I think it’s incredibly important to leave clients with a clear picture of what’s been done for the next round of development.",

            }
        ]

    }

});