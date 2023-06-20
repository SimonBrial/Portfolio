const initialState = [
    {
        descriptions: {
            español: {
                header: {
                    navbar: [
                        {
                            title: "Acerca de mi",
                            url: "#about_me"
                        }, {
                            title: "Habilidades",
                            url: "#skills"
                        }, {
                            title: "Proyectos",
                            url: "#projects"
                        }, {
                            title: "Intereses",
                            url: "#interesses"
                        }
                    ],
                    switchBtn: "Idiomas",
                },
                aboutMe: {
                    title: "Hola, soy ",
                    paragraph1: {
                        start: "Soy un desarrollador",
                        clave: "Frontend",
                        rest: ", amante de la tecnología y ciencia, con capacidades para aprender y poner a prueba todos los conocimientos obtenidos y que se seguirán adquiriendo con el pasar de los años y con los nuevos retos que irán llegando."
                    },
                    paragraph2: {
                        clave: "Actualmente",
                        rest: ", me encuentro en el estudio de tecnologías Backend para desempeñarme en ambas áreas del desarrollo de aplicaciones web."

                    },
                    downBtn: "Descargar CV"
                },
                skills: {
                    title: "Habilidades",
                    paragraph: "Aquí se muestran los skills que con los que he ido practicando a lo largo de mis estudios..."
                },
                projects: {
                    title: "Proyectos",
                    paragraph: "A continuacion se muestran varios proyectos desarrollados con las tecnologias mencionadas anteriormente.",
                    projectBtn: ["Ver Projecto", "Ver Codigo"]
                },
                interesses: "Intereses",
                footer: "Todos los derechos reservados"
            },
            english: {
                header: {
                    navbar: [{
                        title: "About me",
                        url: "#about_me"
                    }, {
                        title: "Skills",
                        url: "#skills"
                    }, {
                        title: "Projects",
                        url: "#projects"
                    }, {
                        title: "Interesses",
                        url: "#interesses"
                    }],
                    switchBtn: "Idioms",
                },
                aboutMe: {
                    title: "Hi, I'm ",
                    paragraph1: {
                        start: "I am a",
                        clave: "Frontend",
                        rest: " developer, a lover of technology and science, with the ability to learn and test all the knowledge obtained and that will continue to be acquired over the years and with the new challenges that will come."
                    },
                    paragraph2: {
                        clave: "Currently",
                        rest: ", I am in the study of Backend technologies to work in both areas of web application development."
                    },
                    downBtn: "Download CV"
                },
                skills: {
                    title: "Skills",
                    paragraph: "Here are the skills that I have been practicing throughout my studies..."
                },
                projects: {
                    title: "Projects",
                    paragraph: "Below are several projects developed with the technologies mentioned above.",
                    projectBtn: ["View Project", "View Code"]
                },
                interesses: "Interesses",
                footer: "All rights reserved"
            }
        }
    },
    {
        themes: [
            {
                name: "color 1",
                code: "#21F9B8",
                darkCode: "#00B16C",
                id: 1
            },
            {
                name: "color 2",
                code: "#BF48FF",
                darkCode: "#7600D2",
                id: 2
            },
            {
                name: "color 3",
                code: "#6BFF49",
                darkCode: "#22E202",
                id: 3
            },
            {
                name: "color 4",
                code: "#4977FF",
                darkCode: "#002FD6",
                id: 4
            },
        ]

    }
];

export default initialState;