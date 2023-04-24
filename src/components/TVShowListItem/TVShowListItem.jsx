import s from "./style.module.css";
import { SMALL_IMG_BASE_URL } from "../../config";

export function TVShowListItem({ tvShow, onClick }) {
  // console.log(tvShow)
  const on_Click  = () => { 
    onClick(tvShow)
  }
  return (
    <div className={s.container} onClick={on_Click}>
      <img
        src={SMALL_IMG_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > 20
          ? tvShow.name.slice(0, 20) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
