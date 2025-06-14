'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function AddMovieForm({ addMovie, movies }) {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('0');

    const handleTitle = function (e) {
        setTitle(e.target.value);
    }

    const handleRating = function (e) {
        setRating(e.target.value);
    }

    const handleSubmit = function (e) {
        e.preventDefault();

        if (title === "") {
            alert("Du måste ange titel för att kunna spara filmen");
        } else if (rating === "0") {
            alert("Du måste ange ett betyg för att kunna spara filmen");
        } else if (movies.some(movie => movie.title.trim().toLowerCase() === title.trim().toLowerCase())) {
            alert("Filmen finns redan i din lista. Försök igen")
        } else {
            const movie = {
                title,
                rating
            };

            addMovie(movie)
            setTitle('')
            setRating('0')
        }
    };

    return (
        <form id="add-movie-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Lägg till en film</legend>

                <label htmlFor="title-field">Titel:</label>
                <input type="text" className="form-control" placeholder="Titel här..." value={title} onChange={handleTitle}></input>

                <label htmlFor="rating-field">Betyg:</label>

                <select className="form-control" value={rating} onChange={handleRating}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3" value="Spara film"></input>
            </fieldset>
        </form>
    );
}