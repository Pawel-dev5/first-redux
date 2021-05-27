import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../duck/operations';

const MoviesContainer = ({ movies, getAllMovies }) => {

    useEffect(() => { getAllMovies() }, [])

    return (
        <>
            <h4>{movies.listName}</h4>
            <ul>
                {movies.list.map((movie) => <li key={movie.id}>{movie}</li>)}
            </ul>
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    getAllMovies: () => dispatch(getAllMovies())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(MoviesContainer)