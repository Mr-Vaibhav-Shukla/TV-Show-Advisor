import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv_show";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";
import logoImage from "./assets/images/logo.png";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export default function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recomdedList, setRecomdedList] = useState([]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        // throw popularTVShowList[0]
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("Error: " + {error});
    }
  }

  async function fetchRecomdations(tvShowId) {
    try {
      const recomded = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recomded.length > 0) {
        setRecomdedList(recomded.slice(0, 10));
        // console.log(recomdedList);
      }
    } catch (error) {
      alert("Error: " + error);
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResult = await TVShowAPI.fetchByTitle(title);
      console.log(searchResult);
      if (searchResult.length > 0) {
        setCurrentTVShow(searchResult[0]);
      }
    } catch (error) {
      alert("Error: " + error);
    }
  }

  function updateCurrentTvShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecomdations(currentTVShow.id);
    }
    // eslint-disable-next-line
  }, [currentTVShow]);

  // console.log(recomdedList);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
                 url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImage}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && recomdedList.length > 0 && (
          <TVShowList
            onClickItem={updateCurrentTvShow}
            tvShowList={recomdedList}
          />
        )}
      </div>
    </div>
  );
}
