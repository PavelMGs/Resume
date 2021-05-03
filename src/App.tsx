import React from 'react';
import { Route, Switch } from 'react-router';
import s from './App.module.scss';
import AboutMe from './pages/AboutMe/AboutMe';
import Contacts from './pages/Contacts/Contacts';
import Education from './pages/Education/Education';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProjectExamples from './pages/ProjectExamples/ProjectExamples';

const App = () => {
    return (
        <div className={s.root}>
            <Header />
            <Switch>
                <Route exact path="/">
                    <AboutMe />
                </Route>
                <Route path="/education">
                    <Education />
                </Route>
                <Route exact path="/projects">
                    <ProjectExamples />
                </Route>
                <Route exact path="/contacts">
                    <Contacts />
                </Route>
            </Switch>
            <Route path="/" component={Footer} />
        </div>
    )
}

export default App;
