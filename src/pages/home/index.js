import React from "react";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";

function Home() {
  return (
    <>
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={
            "Mei - A specialist in weather manipulation who has taken up the fight to preserve the environment."
          }
        />

        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

        <Carousel category={dadosIniciais.categorias[1]} />

        <Carousel category={dadosIniciais.categorias[2]} />

        <Carousel category={dadosIniciais.categorias[3]} />
      </PageDefault>
    </>
  );
}

export default Home;
