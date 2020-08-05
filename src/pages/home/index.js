import React, { useState, useEffect } from 'react';
import categoriesRepository from '../../repositories/categories';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategoriesWithVideos()
      .then((response) => { setCategories(response); })
      .catch((error) => { console.log(error.message); });
  }, []);

  return (
    <>
      <PageDefault paddingAll={0}>
        {categories.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={category.videos[0].title}
                  url={category.videos[0].url}
                  videoDescription="Mei - A specialist in weather manipulation who has taken up the fight to preserve the environment."
                />
                <Carousel ignoreFirstVideo category={category} key={category.id} />
              </div>
            );
          }
          return (<Carousel category={category} key={category.id} />);
        })}
      </PageDefault>
    </>
  );
}

export default Home;
