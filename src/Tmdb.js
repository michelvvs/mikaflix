const API_KEY="66af122d572206391c0c39590027b0bd";
const API_BASE="https://api.themoviedb.org/3";

// originais da netflix
// recomendados (trending)
// em alta (top-rated)
// ação - comédia - terror - romance - documentários

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    //console.log(req)
    const json = await req.json();
    return json;
}

const homeList = {
    getHomeList: async (props) => {
        const final = `language=pt-BR&api_key=${API_KEY}`;
        return [
            {
                slug: 'originals',
                title: 'originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${final}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${final}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?${final}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${final}`)
            },
            {
                slug: 'comedy',
                title: 'comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&${final}`)
            },
            {
                slug: 'horror',
                title: 'terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${final}`)
            },
            {
                slug: 'romance',
                title: 'romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${final}`)
            },
            {
                slug: 'documentary',
                title: 'documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&${final}`)
            },

        ];
    },

    getMovieInfo: async (movieId, type) => {
        const final = `language=pt-BR&api_key=${API_KEY}`;
        let info = {};
        if (movieId) {
            switch(type) {
                case 'movie' :
                    info = await basicFetch(`/movie/${movieId}?${final}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${final}`);
                break;
            }
            //console.log(`/tv/${movieId}?${final}`)
        }
        return info;
    }
}


export default homeList;