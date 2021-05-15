import JSMarathon from '../assets/JSMarathon.pdf';
import ReactMarathon from '../assets/ReactMarathon.pdf';
import RSCertificate from '../assets/RSCertificate.pdf';

export const additionalEducation = [
    {
        name: 'JS-marathon',
        description: 'A three-week marathon in native JS with a simple card game as a project. Zar Zakharov taught the material and conducted the code review.',
        organization: 'Zar Zakharov',
        certificate: JSMarathon,
        projects: [{
            name: 'Pokemon Game',
            repository: 'https://github.com/PavelMGs/js-marathon',
            deploy: 'https://js-marathon-pokemon-game.netlify.app/'}],
    },
    {
        name: 'React-marathon',
        description: 'The next marathon after JS-marathon. The project is a simple app for learning English words. My first experience with React, for this reason, the application works clumsily, in the near future it will be improved.',
        organization: 'Zar Zakharov',
        certificate: ReactMarathon,
        notdeployed: true
        // projects: [{
        //     name: 'Learn The Words',
        //     repository: 'https://bitbucket.org/PavelMGs/learn-the-words',
        //     deploy: 'https://js-marathon-pokemon-game.netlify.app/'}],
    },
    {
        name: 'ReactPro-marathon',
        description: '',
        organization: 'Zar Zakharov',
        projects: [{
            name: 'Pokemon Game',
            repository: '',
            deploy: 'https://js-marathon-pokemon-game.netlify.app/'}],
    },
    {
        name: 'ReactCourse',
        description: '',
        organization: 'RSSchool',
        certificate: RSCertificate,
        projects: [{
            name: 'Pokemon Game',
            repository: '',
            deploy: 'https://js-marathon-pokemon-game.netlify.app/'}],
    },
]