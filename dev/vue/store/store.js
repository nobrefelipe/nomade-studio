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
        ],


        photography: [

            {
                title: "the vietnamese girl",
                description: "the vietnamese girl description",
                image: "https://drscdn.500px.org/photo/156654925/q%3D80_m%3D2000/90686243382daf4ac0f4cd51e4b43442",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "the girl",
                description: "the vietnamese girl description",
                image: "https://drscdn.500px.org/photo/216218489/q%3D80_m%3D2000/623e5f6f9edb4f81fc57f7f54ed3705e",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"113",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "paddling in the light",
                description: "paddling in the light description",
                image: "https://drscdn.500px.org/photo/155602957/q%3D80_m%3D2000/db87548747518b05cebc2041c74dbdf9",
                tags: ["people", "black and white"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"200",
                    aperture: "5.6",
                    shutter_speed: "1/160",
                    iso: "100"

                }
            },

            {
                title: "thoughts",
                description: "thoughts description",
                image: "https://drscdn.500px.org/photo/155392829/q%3D80_m%3D2000/7c41b24d95ea0d8ffe0c233928a166d9",
                tags: ["people", "black and white"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"200",
                    aperture: "5.6",
                    shutter_speed: "1/320",
                    iso: "500"

                }
            },

            {
                title: "the old man",
                description: "the old man description",
                image: "https://drscdn.500px.org/photo/155389821/q%3D80_m%3D2000/74786dc988916d97a2dd583061b20027",
                tags: ["people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"50",
                    aperture: "4",
                    shutter_speed: "1/320",
                    iso: "250"

                }
            },

            {
                title: "heading the infinity",
                description: "heading the infinity description",
                image: "https://drscdn.500px.org/photo/155389827/q%3D80_m%3D1500/f07f66ead5a96f3866470210008faab6",
                tags: ["people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"50",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "100"

                }
            },

            {
                title: "desolation",
                description: "desolation description",
                image: "https://drscdn.500px.org/photo/147856551/q%3D80_m%3D2000/0daec028eb3d4deb605d8f90d930a570",
                tags: ["landscape", "nature"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 16mm",
                    focal_length:"16",
                    aperture: "5",
                    shutter_speed: "1/320s",
                    iso: "200"

                }
            },

            {
                title: "the sunset boat",
                description: "the sunset boat description",
                image: "https://drscdn.500px.org/photo/147717849/q%3D80_m%3D2000/9a1e76a8d88779d17999e6e88b690fca",
                tags: ["landscape", "nature"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 16mm",
                    focal_length:"16",
                    aperture: "5",
                    shutter_speed: "1/320s",
                    iso: "200"

                }
            },

            {
                title: "abandoned pier",
                description: "abandoned pier description",
                image: "https://drscdn.500px.org/photo/146396817/q%3D80_m%3D2000/c69c976886aa4a5b881b91ca31c0abb7",
                tags: ["landscape", "nature"],
                settings: {

                    camera: "NX 16mm",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"16",
                    aperture: "22",
                    shutter_speed: "25",
                    iso: "100"

                }
            },


        ]

    }

});