import JSMarathon from '../assets/JSMarathon.pdf';
import ReactMarathon from '../assets/ReactMarathon.pdf';
import RSCertificate from '../assets/RSCertificate.pdf';

export const additionalEducation = [
    {
        name: 'JS-marathon',
        description: 'A three-week marathon in native JS with a simple card game as a project. Zar Zakharov taught the material and conducted the code review.',
        organization: 'Zar Zakharov',
        certificate: 'https://res.cloudinary.com/dsvroi111/image/upload/v1621249990/JSMarathon_page-0001_uplv54.jpg',
        projects: [{
            name: 'Pokemon Game',
            repository: 'https://github.com/PavelMGs/js-marathon',
            deploy: 'https://js-marathon-pokemon-game.netlify.app/'}],
    },
    {
        name: 'React-marathon',
        description: 'The next marathon after JS-marathon. The project is a simple app for learning English words. My first experience with React, for this reason, the application works clumsily, in the near future it will be improved.',
        organization: 'Zar Zakharov',
        certificate: 'https://res.cloudinary.com/dsvroi111/image/upload/v1621249960/ReactMarathon_page-0001_mhnd3m.jpg',
        notdeployed: true
        // projects: [{
        //     name: 'Learn The Words',
        //     repository: 'https://bitbucket.org/PavelMGs/learn-the-words',
        //     deploy: 'https://js-marathon-pokemon-game.netlify.app/'}],
    },
    {
        name: 'ReactPro-marathon',
        description: 'The next marathon is from Zar Zakharov. For unknown reasons, it was not completed, the project is also in limbo. Topics that were studied at this marathon: Webpack, TypeScript, ReactHooks, touched upon testing using the Jest library, SSR. The marathon participants are still waiting for StoryBook and Axios lessons and certificates.',
        organization: 'Zar Zakharov',
        notdeployed: true,
        // projects: [{
        //     name: 'Pokemon Game',
        //     repository: '',
        //     deploy: 'https://js-marathon-pokemon-game.netlify.app/'}],
    },
    {
        name: 'ReactCourse',
        description: 'Two-month course from RollingScopes School. There were three projects within the course, two of them were team projects. Links to projects below.',
        organization: 'RSSchool',
        certificate: 'https://res.cloudinary.com/dsvroi111/image/upload/v1621249903/RSCertificate_page-0001_radlng.jpg',
        projects: [
            {
                name: 'Snake',
                repository: 'https://github.com/PavelMGs/react-game',
                deploy: 'https://pavelmgs-react-game.vercel.app/',
            },

            {
                name: 'TravelApp',
                repository: 'https://github.com/borodichAlex/travel-app',
                deploy: 'https://borodichalex-travel-app.netlify.app/',
            },

            {
                name: 'RSLang',
                repository: 'https://github.com/borodichAlex/rslang/tree/develop',
                deploy: 'https://rslang-team-33-borodichalex.netlify.app/',
            },
        ],
    },
]