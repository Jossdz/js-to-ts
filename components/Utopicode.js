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
          Full-stack developer and computer systems engineer with 3 years of
          experience in technology education, currently lead teacher of the
          Ironhack Mexico web development course where he has helped more than
          200 students to become programmers using the MERN stack. When he is
          not teaching he is learning the newest and best in the technology
          industry and then sharing it in class, community talks and the tech
          stand up podcast.
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
