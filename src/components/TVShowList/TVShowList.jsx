import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You'll probably Like</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
            // console.log(tvShow)
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem
                onClick={onClickItem}
                tvShow={tvShow}
              />
            </span>
          )
        })}
      </div>
    </div>
  );
}
