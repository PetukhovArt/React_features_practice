import React from 'react'
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

/*
* 1 - в файле Pages.tsx дописать роуты на все страницы
* 2 - в файле Sidebar.tsx дописать className так чтоб вешался
* класс s.active когда мы уже на соответствующей странице
* 3 - застилизовать хэдэр и сайдбар в соответствии с дизайном
* */

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'}  element={<Navigate to={'/pre-junior'}/> } />

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={'/pre-junior'} element={<PreJunior/>} />
                <Route path={'/junior'} element={<Junior/>} />
                <Route path={'/junior-plus'} element={<JuniorPlus/>} />

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/*'} element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Pages
