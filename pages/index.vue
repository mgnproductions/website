<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="start" class="section1">
      <v-col cols="12" class="text-center pt-15">
        <h1>Comunidade MGN Filmes</h1>
        <h3 class="mt-2">Nova produção <b> “A Fada do Lar” </b></h3>

        <div class="highlight-chip mt-5">
          <h5 class="white--text text-uppercase">
            em exibição nas salas de cinema
          </h5>
        </div>
      </v-col>

      <v-col cols="12" class="pa-0">
        <OwlCarousel v-bind="settings">
          <div v-for="i in 14" :key="i" style="width: 820px">
            <v-hover v-slot="{ hover }">
              <v-card class="carousel-card" :class="{ 'on-hover': hover }">
                <!-- <img class="carousel-img" :src="item.src" /> -->

                <NuxtImg
                  :src="`movie-frames/frame-${i}.jpg`"
                  alt="Movie frame"
                  loading="lazy"
                />

                <div class="align-self-center">
                  <v-btn class="action-btn" :class="{ 'show-btns': hover }">
                    Ver trailer <IconPlay class="ml-2"></IconPlay>
                  </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
        </OwlCarousel>
      </v-col>
      <v-col cols="12" class="text-center">
        <h4 class="">Viste o filme “A Fada do Lar”?</h4>
        <v-btn class="action-btn mt-3" :ripple="false" color="#242424">
          RECEBE MGN TOKENS
          <IconArrowDown class="ml-2"> </IconArrowDown>
        </v-btn>
      </v-col>
    </v-row>
    <v-container>
      <v-row justify="center" align="start" class="pt-15">
        <v-col cols="12" sm="12" md="12" class="pt-10">
          <h5 color="#8888fd">QUEM SOMOS</h5>
        </v-col>

        <v-col cols="12" sm="6" md="6" class="">
          <h2 class="mb-5">As produções MGN</h2>
          <p class="normal-text">
            Fundada em 1987 por Tino Navarro a MGN Filmes produziu ou
            co-produziu 42 longas metragens, entre as quais filmes “A Mulher do
            Próximo”, “Adão e Eva”, “Adeus, Pai”, “Zona J”, “Call Girl”, “O
            Xangô de Baker Street”, e “100 Metros”, uma mini-série de ficção
            (Até Amanhã, Camaradas) e uma curta-metragem (Olga Drummond). Os
            filmes da MGN fizeram mais de 6 milhões de espectadores em salas
            cinema, dos quais 1.987.356 em Portugal, foram um enorme sucesso em
            home vídeo e em televisão e ganharam 76 Prémios, entre os quais 17
            Globos de Ouro e 20 Prémios Sophia em Portugal, 6 Prémios Goya em
            Espanha, 3 Prémios do Cinema Brasileiro no Brasil.
          </p>
        </v-col>

        <v-col cols="12" sm="6" md="6" class="pl-sm-7">
          <OwlCarousel
            style="width: 8000px"
            v-bind="{
              ...settings,
              margin: 20,
              stagePadding: 50,
              center: false,
            }"
          >
            <div v-for="i in 1" :key="i" style="width: 282px">
              <v-card class="carousel-card">
                <NuxtImg
                  :src="`movie-posters/poster-${i}.jpg`"
                  alt="Movie poster"
                  loading="lazy"
                />
              </v-card>
            </div>
          </OwlCarousel>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pt-15">
        <v-col cols="12" sm="12" md="12">
          <h4 class="">A equipa MGN Filmes</h4>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="section-team mt-8">
        <v-col cols="12" sm="4" md="4" class="member-card">
          <div class="flip-horizontal-bottom">
            <NuxtImg
              src="team/team-1.webp"
              alt="Tino Navarro"
              loading="lazy"
              width="110"
              height="110"
            />
            <div class="highlight-chip mt-5">
              <h6 class="white--text text-uppercase">tino navarro</h6>
            </div>
            <h5 class="mt-3">Fundador e Produtor</h5>
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" class="member-card">
          <div>
            <NuxtImg
              src="team/team-2.webp"
              alt="Carla Silva"
              loading="lazy"
              width="110"
              height="110"
            />
            <div class="highlight-chip mt-5">
              <h6 class="white--text text-uppercase">CARLA SILVA</h6>
            </div>
            <h5 class="mt-3">Produtora Executiva</h5>
          </div>
          <div class="member-info">
            Na MGN Filmes desde 2004 é responsável por financiamentos
            institucionais e pela gestão financeira e administrativa da empresa
            e dos seus projetos.
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" class="member-card">
          <div>
            <NuxtImg
              src="team/team-3.webp"
              alt="Adriano Navarro"
              loading="lazy"
              width="110"
              height="110"
            />
            <div class="highlight-chip mt-5">
              <h6 class="white--text text-uppercase">ADRIANO NAVARRO</h6>
            </div>
            <h5 class="mt-3">Produtor Executivo</h5>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="section4 mt-15 pt-6">
      <v-row justify="center" align="start" class="pt-sm-14">
        <v-col cols="12" sm="6" md="6" class="pr-sm-16">
          <h5 class="white--text mb-6">COMUNIDADE</h5>
          <h2 class="white--text mb-6">A Comunidade MGN</h2>
          <p class="white--text normal-text">
            A Comunidade MGN Filmes é uma iniciativa promovida pela MGN Filmes
            Lda, com o objetivo de abrir a participação nas várias atividades
            nas quais a produtora se envolve a um núcleo alargado de pessoas,
            transformando uma relação passiva entre quem faz os filmes
            (produtores, autores, actores, técnicos) e quem os vê (espectadores)
            numa relação cada vez mais interativa e participativa, através da
            utilização de iniciativas offline e online, bem como de ferramentas
            da Web3.
          </p>
          <a href="" target="_blank" class="white--text link"
            >Sabe mais sobre a Comunidade MGN
            <IconArrowForward></IconArrowForward>
          </a>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="topics px-sm-8">
          <h4 class="white--text font-weight-bold">
            Esta comunidade associando os espectadores dos filmes àqueles que os
            fazem tem como objetivos principais:
          </h4>
          <div v-for="(topic, i) in topics" :key="i" class="topic-item">
            <v-img
              contain
              max-width="85"
              :src="require(`assets/images/icon-community-${i + 1}.webp`)"
            >
            </v-img>
            <p class="white--text d-flex mb-0 ml-5 normal-text">
              {{ topic }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="section5 mt-15 pt-15">
      <v-row justify="center">
        <v-col cols="12" sm="9" class="">
          <h2 class="mb-6 text-center">
            Como se pode tornar membro da Comunidade
          </h2>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="card text-center">
          <div class="px-10 py-6">
            <v-img
              contain
              class="mx-auto mb-5"
              max-width="206"
              :src="require(`assets/images/icon-token.webp`)"
            ></v-img>
            <h4 class="mb-5 font-weight-bold">Espetadores de cinema</h4>
            <p class="normal-text mb-10">
              Podem ser membros da Comunidade todos os que tenham assistido a um
              filme da MGN nas salas de cinema a partir de 1 de outubro de 2022.
              Para isso basta enviar o bilhete de cinema e solicitar o $MGN
              token a que tem direito.
            </p>
            <v-btn class="action-btn mt-3" :ripple="false" color="#242424">
              RECEBE MGN TOKENS
              <IconArrowDown class="ml-2"> </IconArrowDown>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="card text-center">
          <div class="px-8 py-6">
            <v-img
              contain
              class="mx-auto mb-5"
              max-width="206"
              :src="require(`assets/images/icon-community.webp`)"
            >
            </v-img>
            <h4 class="mb-5 font-weight-bold">
              Autores, Actores, Técnicos e Colaboradores
            </h4>
            <p class="normal-text mb-10">
              Todos os que participaram na produção do filme “A Fada do Lar” e
              atuais colaboradores da MGN podem receber tokens $MGN desde que o
              solicitem, indicando a carteira digital onde os pretendem receber.
              O número de tokens a distribuir por cada um será determinado pela
              MGN Filmes Lda.*
            </p>
            <v-btn class="action-btn mb-5" :ripple="false" color="#242424">
              FALE CONNOSCO PELO DISCORD
            </v-btn>
            <p class="info-message">
              *Em datas a anunciar, a MGN distribuirá $MGN tokens por
              participantes em anteriores e futuras produções.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import OwlCarousel from 'vue-owl-carousel'
import IconArrowForward from '../assets/svg/icon-arrow-forward.vue'
import IconArrowDown from '~/assets/svg/icon-arrow-down.vue'
import IconPlay from '~/assets/svg/icon-play.vue'
export default {
  name: 'IndexPage',
  components: { OwlCarousel, IconArrowDown, IconPlay, IconArrowForward },
  data() {
    return {
      settings: {
        loop: true,
        stagePadding: 100,
        autoplay: true,
        // autoplaySpeed: true,
        dots: false,
        margin: 40,
        autoWidth: true,
        center: true,
        nav: false,
        autoplayHoverPause: true,
      },
      topics: [
        'Reflectir sobre projetos e processos de produção;',
        'Estabelecer formas de comunicação ativas entre todos quebrando as barreiras existentes; ',
        'Recompensar o talento (autores, actores e técnicos) e os espectadores dos filmes da MGN;',
        'Descentralizar progressivamente as decisões.',
      ],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.section-team {
  .member-card:nth-child(1) > div:first-child {
    background-image: linear-gradient(59deg, #f9f3ec 5%, #e1dcf0 92%);
  }
  .member-card:nth-child(2) > div:first-child {
    background-image: linear-gradient(59deg, #eae5ef 5%, #d2cff2 92%);
  }
  .member-card:nth-child(3) > div:first-child {
    background-image: linear-gradient(59deg, #d9d5f1 5%, #bab8f5 92%);
  }

  .member-card {
    text-align: center;
    position: relative;
    .member-info {
      position: absolute;
      opacity: 0;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 80%;
      animation: puff-out-center 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }

    &:hover {
      > div * {
        opacity: 0.1;
      }
      .member-info {
        animation: puff-in-center 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      }
    }
    > div:first-child {
      border-radius: 4px;
      padding: 42px;
    }
  }
}
.active.center .carousel-card {
  &.v-card {
    transition: opacity 0.4s ease-in-out;
  }

  &.on-hover img {
    opacity: 0.6;
  }
  .show-btns {
    display: inline;
  }
  .action-btn {
    position: absolute;
    bottom: 80px;
    right: 60px;
  }
}
.carousel-card {
  .action-btn {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .action-btn {
      display: inline;
      position: absolute;
      bottom: 80px;
      right: 60px;
    }
  }
}
.carousel-img {
  height: 420px;
}
.section1 {
  background-image: linear-gradient(
    55deg,
    #faf4ec 13%,
    #c5c3f3 71%,
    #9595fa 94%
  );
  height: 870px;
}
.section4 {
  background-color: #242424;
  .row {
    max-width: 1262px;
    margin: 0 auto;
    .topics {
      .topic-item {
        display: flex;
        align-items: center;

        padding: 24px 0 18px 0;

        border-bottom: solid 1px #fff;
      }
    }
  }
  * {
    color: white;
  }
}

.section5 {
  .card > div:first-child {
    height: 100%;
    background-image: linear-gradient(49deg, #faf4ec 3%, #dad6f1 91%);
  }
}
</style>
