
import { createStore } from 'vuex';


const store = createStore({
    state() {
        return {
            jobchosen: [],
            chosen: [],
            filtered: false,
            close: [
                require('@/assets/icon-remove.svg'),
                'Clear'
            ],
            header: [
                require('@/assets/bg-header-desktop.svg'),
                require('@/assets/bg-header-mobile.svg')
            ],
            jobs: [
                {
                    logo: require('@/assets/photosnap.svg'),
                    company: 'Photosnap',
                    newer: true,
                    featured: true,
                    position: "Senior Front-end Developer",
                    info: ['2d ago', 'Full Time', 'USA only'],
                    categories: ['Frontend', 'Senior', 'HTML', 'CSS', 'Javascript'],
                    appear: true
                },
                {
                    logo: require('@/assets/manage.svg'),
                    company: 'Manage',
                    newer: true,
                    featured: true,
                    position: "Fullstack Developer",
                    info: ['1d ago', 'Part Time', 'Remote'],
                    categories: ['Fullstack', 'Midweight', 'Python', 'React'],
                    appear: true
                },
                {
                    logo: require('@/assets/account.svg'),
                    company: 'Account',
                    newer: false,
                    featured: false,
                    position: "Junior Front-end Developer",
                    info: ['2d ago', 'Part Time', 'USA only'],
                    categories: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
                    appear: true
                },
                {
                    logo: require('@/assets/myhome.svg'),
                    company: 'MyHome',
                    newer: false,
                    featured: false,
                    position: "Junior Front-end Developer",
                    info: ['5d ago', 'Contract', 'USA only'],
                    categories: ['Frontend', 'Junior', 'CSS', 'Javascript'],
                    appear: true
                },
                {
                    logo: require('@/assets/loop-studios.svg'),
                    company: 'Loop Studios',
                    newer: false,
                    featured: false,
                    position: "Software Engineer",
                    info: ['1w ago', 'Full Time', 'Worldwide'],
                    categories: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
                    appear: true
                },
                {
                    logo: require('@/assets/faceit.svg'),
                    company: 'FaceIt',
                    newer: false,
                    featured: false,
                    position: "Junior Backend Developer",
                    info: ['2w ago', 'Full Time', 'UK only'],
                    categories: ['Backend', 'Junior', 'Ruby', 'RoR'],
                    appear: true
                },
                {
                    logo: require('@/assets/shortly.svg'),
                    company: 'Shortly',
                    newer: false,
                    featured: false,
                    position: "Junior Developer",
                    info: ['2w ago', 'Full Time', 'Worldwide'],
                    categories: ['Frontend', 'Junior', 'HTML', 'Sass', 'Javascript'],
                    appear: true
                },
                {
                    logo: require('@/assets/insure.svg'),
                    company: 'Insure',
                    newer: false,
                    featured: false,
                    position: "Junior Front-end Developer",
                    info: ['2w ago', 'Full Time', 'USA only'],
                    categories: ['Frontend', 'Junior', 'Vue', 'Javascript', 'Sass'],
                    appear: true
                },
                {
                    logo: require('@/assets/eyecam-co.svg'),
                    company: 'Eyecam Co.',
                    newer: false,
                    featured: false,
                    position: "Fullstack Engineer",
                    info: ['3w ago', 'Full Time', 'Worldwide'],
                    categories: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
                    appear: true
                },
                {
                    logo: require('@/assets/the-air-filter-company.svg'),
                    company: 'The Air Filter Copmany',
                    newer: false,
                    featured: false,
                    position: "Front-end Developer",
                    info: ['1mo ago', 'Part Time', 'Worldwide'],
                    categories: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
                    appear: true
                }
            ]
           
        }
    },
    getters: {
        chosen(state) {
            return state.chosen
        },
        filtered(state) {
            return state.filtered
        },
        close(state) {
            return state.close
        },
        header(state) {
            return state.header
        },
        jobs(state) {
            return state.jobs
        },
    },

    mutations: {
        chooseTheCategory(state, payload) {

            //Abrimos o menu de filtros
            state.filtered = true
            
            //Pegamos o payload (argument do method)
            const data = payload.category


            //Jogamos dentro do array
            if(!state.chosen.includes(data)) {
                state.chosen.push(data)
            }

            //Tiramos do DOM todos os jobs
            state.jobs.forEach(job => {
                job.appear = false
            })
            


            //Aplicamos um filtro que passa por uma funcao que testa se tal job tem TODAS os elementos do array
            const found = state.jobs.filter(job => {
                return state.chosen.every(tag => job.categories.includes(tag))
            })

            //Nos que passaram o teste botamos de volta no DOM
            found.forEach(fo => {
                fo.appear = true
            })

        },




        closeTheCategory(state, payload) {
           
            //Pegamos o payload (argument do method)
            const data = payload.category

            //Achamos no array chosen o index do payload
            const index = state.chosen.indexOf(data);

            //Passamos para retirar
            if (index > -1) {
            state.chosen.splice(index, 1);
            }

            //Aqui fazemos o mesmo query de quando fazemos a escolha de categoria
            const found = state.jobs.filter(job => {
                return state.chosen.every(tag => job.categories.includes(tag))
            })

            found.forEach(fo => {
                fo.appear = true
            })

            //Se o array chosen estiver vazio, retiramos ele e todos voltam ao normal
            if (state.chosen.length === 0) {
                state.filtered = false

            }

        },


        clearTheCategory(state) {

            //Tiramos o menu
            state.filtered = false

            //Esvaziamos o array de filtros 
            state.chosen = []

            //Todos os jobs aparecem novamente
            state.jobs.forEach(job => {
                job.appear = true
            })
        }

    },
    actions: {
        choosingCategory(context, payload) {
            context.commit('chooseTheCategory', payload)
        },
        closingCategory(context, payload) {
            context.commit('closeTheCategory', payload)
        },
        clearingCategory(context) {
            context.commit('clearTheCategory')
        }
    }


})

export default store