
export default async function getMovies(movieName) {
    try{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          //token de leitura da API (ver como encriptar ou colocar num .env).
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTI5OWVkZTNmYjk1NWZiMDcwNWQ3YzFlM2JkNTI4ZiIsInN1YiI6IjY2M2ViY2QxMjBmMWU0YjNlMGEzNzNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-HagH-V6KK8jhO5uf9fF-jlfjXJbjwDPa02lk0N4RZw'
        }
    };

    
    //No site do themoviedb ele tem vários exemplos de uso da API, esse que estou utilizando é o search/movie.

    const infoMovie = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
    console.log(infoMovie);

    //filtrando o primeiro retorno
    const resultados = infoMovie.results;
    console.log(resultados);
    
    //filtrando os resultados.
    const filmes = resultados.map(element => {
        let { id, original_title, title} = element;
        let dados = {id, original_title, title}
        return dados;
        }
    );
    //log com resultados filtrados.
    console.log(filmes)
    }catch(error) {
        console.log(error)
    }
}