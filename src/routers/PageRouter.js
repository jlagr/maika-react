import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import CompaniaScreen from '../components/CompaniaScreen'
import { FestivalesScreen } from '../components/FestivalesScreen'
import Footer from '../components/Footer'
import ObraScreen from '../components/ObraScreen'
import ObrasGridScreen from '../components/ObrasGridScreen'
import PagesNav from '../components/PagesNav'
import ProyectosScreen from '../components/ProyectosScreen'
import TalleresScreen from '../components/TalleresScreen'

function PageRouter() {
    return (
        <>
            <PagesNav />
            
            <div>
                <Switch>
                    <Route exact path="/pages/compania" component={CompaniaScreen} />
                    <Route exact path="/pages/obras" component={ObrasGridScreen} />
                    <Route exact path="/pages/obras/:id" component={ObraScreen} />
                    <Route exact path="/pages/proyectos" component={ProyectosScreen} />
                    <Route exact path="/pages/festivales" component={FestivalesScreen} />
                    <Route exact path="/pages/talleres" component={TalleresScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>

            <Footer />
        </>
    )
}

export default PageRouter
