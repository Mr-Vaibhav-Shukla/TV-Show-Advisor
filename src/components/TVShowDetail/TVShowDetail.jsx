import s from "./style.module.css"
import { FiveStarRating } from "../FiveStarRating/FiveStarRating"

export function TVShowDetail({tvShow}){
    // const x = 3.5
    return (
        <div>
            <div className={s.title}>{tvShow.name}</div>
            <div className={s.rating}>
                <FiveStarRating rating = {tvShow.vote_average / 2}/>
                <p>{tvShow.vote_average / 2}/5</p>
            </div>
            <div className={s.overview}>{tvShow.overview}</div>
        </div>
    )   
}