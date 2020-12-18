$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeInLeft",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

const home = document.querySelector('.main')
const about = document.querySelector('.About')
const resume = document.querySelector('.Resume')
const projects = document.querySelector('.Projects')

document.querySelector('#Home').addEventListener('click', showHome)
document.querySelector('#About').addEventListener('click', showAbout)
document.querySelector('#Resume').addEventListener('click', showResume)
document.querySelector('#Projects').addEventListener('click', showProjects)


function showHome() {
    home.classList.remove('hidden')
    about.classList.add('hidden')
    resume.classList.add('hidden')
    projects.classList.add('hidden')
    
}

function showAbout() {
    home.classList.add('hidden')
    about.classList.remove('hidden')
    about.classList.add('main')
    resume.classList.add('hidden')
    projects.classList.add('hidden')
}

function showResume() {
    home.classList.add('hidden')
    about.classList.add('hidden')
    resume.classList.remove('hidden')
    resume.classList.add('main')
    projects.classList.add('hidden')
}

function showProjects() {
    home.classList.add('hidden')
    about.classList.add('hidden')
    resume.classList.add('hidden')
    projects.classList.add('main')
    projects.classList.remove('hidden')
}