import React from "react"

function MovieCard(props) {
    console.log(props)
    return (
        <div className="movieCard">
            <div className="movie--img">
                <img 
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`}
                    alt={props.title}
                />
            </div>
            <div className="movie--desc">
                <div className="movie--title">{props.title}</div>
                <div className="movie--date">RELEASE DATE: {props.release_date}</div>
                <div className="movie--overview">{props.description}</div>
                <div className="movie--rate">RATING: {props.rate}</div>
            </div>
            
        </div>
    )
}

export default MovieCard