import React from 'react';
import './index.css';

const footer = () => {
    return (
        <section className="Footer">
            <p>
                MikaFlix é uma criação de <a href="#"> Michel Victor.</a> <br/>
                Todos os dados foram usados da API do <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">The Movie DB</a>.< br/>
                Interface criada seguindo os tutoriais do canal do Bonieky Lacerda.
            </p>
            
        </section>
    )
}

export default footer;