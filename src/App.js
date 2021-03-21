import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeaturedMovie';
import Header from './components/Header'
import Footer from './components/Footer'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect (() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      //pegando o featured
      let originalsNetflix = list.filter(i => i.slug === "originals");
      let ramdomFeatured = Math.floor(Math.random() * (originalsNetflix[0].items.results.length - 1));
      let movieFeatured = originalsNetflix[0].items.results[ramdomFeatured];
      let featuredInfo = await Tmdb.getMovieInfo(movieFeatured.id, 'tv')
      setFeaturedData(featuredInfo)
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
      
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

    return (
      <div className="page">
        <Header black={blackHeader} />
        {featuredData &&
          <FeatureMovie  item={featuredData} />
        }
        
        <div className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </div>
        <Footer />
        {movieList.length <= 0 &&
        
        <div className="loading">
          <img src="https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif" />
        </div>
        }

      </div>
    );


}


