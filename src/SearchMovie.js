import React from "react"
import { getDefaultNormalizer } from "@testing-library/react"
import MovieCard from './MovieCard'

class SearchMovie extends React.Component {
    constructor() {
        super()
        this.state = {
            query: "",
            result: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getData = (url) => {
        return fetch(url)
                .then(data => data.json())
                .then(data => {this.setState({result: data.results})})
                    
    }

    handleSubmit(e) {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${this.state.query}&page=1&include_adult=false`;
        console.log(url)
        this.getData(url)
    }
       

    handleChange(e) {
        const value = e.target.value
        this.setState({query: value})
        
    }

    render() {
        const isResult = !this.state.result
        return (
            <div className="searchMovie" >
                <form className="form"
                      onSubmit={this.handleSubmit}>
                    <label className="label"> Type Movie title </label> 
                    <input className="input"
                           type="text"
                            name="query"
                            value={this.state.query}
                            onChange={this.handleChange}
                        /> 
                    <button type="submit" className="button">Submit</button>
                </form> 

                {!isResult && (
                    <div className="movie--list">
                        {this.state.result.map(movie => 
                         <MovieCard 
                            title={movie.title}
                            description={movie.overview}
                            rate={movie.vote_average}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                        />)}
                    </div>
                )}

            </div >
        )
    }
}

export default SearchMovie