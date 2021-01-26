import React from "react"
import styled from "styled-components"

const UtopicodeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ElementsGrid = styled.div`
  display: grid;
  width: 80%;
  height: 60%;
  grid-template-areas:
    "h h "
    "p d "
    "f f ";

  h1 {
    grid-area: h;
    font-size: 2.4rem;
  }

  picture {
    grid-area: p;
    width: inherit;
    display: flex;
    align-items: center;
    img {
      width: 200px;
    }
  }

  article {
    grid-area: d;
    padding: 1rem;

    p {
      text-align: justify;
      font-size: 1.4rem;
      font-family: Roboto, sans-serif;
    }
  }

  footer {
    grid-area: f;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    img {
      align-self: center;
      width: 150px;
    }
  }
`

export default () => (
  <UtopicodeContainer>
    <ElementsGrid>
      <h1>JOSÉ CARLOS CORREA</h1>

      <picture>
        <img
          alt='logo'
          src='https://i.postimg.cc/Hsw5HDvs/64382165-2564113720266621-6030354144823345152-o.jpg'
        />
      </picture>

      <article>
        <p>
          Desarrollador Full-stack e Ingeniero en sistemas computacionales con 3
          años de experiencia en educación en tecnología, actualmente lead
          teacher del curso de desarrollo web de Ironhack Mexico dondee ha
          ayudado a más de 200 estudiantes a convertise en programadores usando
          el MERN stack. Cuando no está enseñado está aprendiendo lo más nuevo y
          mejor en la industria de tecnología para luego compartirlo en clase,
          charlas de comunidad y el podcast tech stad up.
        </p>
      </article>

      <footer>
        <p>
          W. <br /> UTOPICODE.IO
        </p>
        <p>@Jossdz</p>
        <img
          src='https://d9hhrg4mnvzow.cloudfront.net/www.utopicode.io/4ddd1c0a-utopicode-white_104102904100r00000r028.png'
          alt='utopicode logo'
        />
      </footer>
    </ElementsGrid>
  </UtopicodeContainer>
)
