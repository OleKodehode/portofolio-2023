import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineHome 
} from 'react-icons/ai'
import ImageOfMe from '../public/portrait_picture.jpg'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio 2023</title>
      </Head>
      <nav
        className={styles.NavBar}
      >
        <ul
          className={styles.NavBarFlex}
        >
          <Link href='/'>
          <li>
            Hjem
          </li>
          </Link>
          <li>
            Prosjekter
          </li>
        </ul>
      </nav>
      <main
      className={styles.Main}
      >
        <section
          className={styles.HeroSection}
        >
          <Image
            src={ImageOfMe}
            width={150}
          />
          <div
            className={styles.HeroSectionInfo}
          >

          <h1>Ole Håvard Furuseth Bergan</h1>
          <h2>Frontend utvikler</h2>
          </div>
        </section>
        <div
          className={styles.BorderBoxContact}
        >
        <section
          className={styles.Contact}
          >
          <h2>
            Kontaktinfo:
          </h2>
          <ul>
            <li>
              <AiOutlineMail/>
              ohfb96@gmail.com
            </li>
            <li>
              <AiOutlinePhone />
              96912304
            </li>
            <li>
              <AiOutlineHome />
              Brothaugen 2A, 5209 Os
            </li>
          </ul>
        </section>
        </div>
        <div
          className={styles.BorderBoxMe}>
        <section
          className={styles.AboutMe}
          >
          <h2>
            Om meg:
          </h2>
          <p>
            Akkurat nå er jeg i praksis som frontend utvikler hos Kodeverket Bergen. Jeg har en enorm kjærlighet for faget og ser frem til å lære enda mer. På fritiden driver jeg som frivilig i Norsk Folkehjelp Solidaritetsungdommen Bergen, der jeg også sitter i styret og er økonomi ansvarlig. Jeg er også med som frivilig i Folkevenn i Bergen. Det går også en del timer til trening, gaming og se på anime.
          </p>
        </section>
        </div>
        <div
          className={styles.BorderBoxSkills}>

        <section
          className={styles.Skills}
          >
          <h2>
            Skills:
          </h2>
          <div>
            <ul>
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
              <li>
                JavaScript
              </li>
              <li>
                ReactJS
              </li>
              <li>
                NextJS
              </li>
              <li>
                Wordpress
              </li>
              <li>
                Wix
              </li>
              <li>
                Google Maps API
              </li>
            </ul>
            <ul>
              <li>
              SCSS
              </li>
              <li>
                Tailwind
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                Styled Components
              </li>
              <li>
                i18n
              </li>
              <li>
                Strapi
              </li>
              <li>
                FireBase
              </li>
            </ul>
          </div>
        </section>
        </div>
        <div
          className={styles.BorderBoxExperience}>

        <section
          className={styles.Experience}
          >
          <h2>
            Erfaring:
          </h2>
          <ul>
            <li>
              Kursdeltaget Kodeverket Bergen
            </li>
            <li>
              Praksis som frontend utvikler hos Kodeverket Bergen
            </li>
            <li>
              Praksis som frontend utvikler hos Bjørnafjorden Næringsråd
            </li>
            <li>
              Praksis som frontend utvikler hos Octaos
            </li>
            <li>
              Økonomiansvarlig hos Norsk Folkehjelp Solidaritetsungdommen Bergen
            </li>
          </ul>
        </section>
        </div>
        <div
          className={styles.BorderBoxPortofolio}>

        <section
          className={styles.Portofolio}
          >
          <h2>
            Portofolio:
          </h2>
          <ul>
            <li>
              GitHub
            </li>
            <li>
              Bergen Armwrestling Club
            </li>
            <li>
              One Piece
            </li>
          </ul>
        </section>
          <button
            className={styles.ProjectsBtn}
            onClick={() => {console.log('test')}}
            >
            Se flere av mine prosjekter her
          </button>
              </div>
          <div className={styles.BottomDivider}></div>
      </main>
      <footer
        className={styles.Footer}
      >
        <ul>
          <li>
            Ole Håvard Furuseth Bergan
          </li>
          <li>
            <AiOutlineMail />
            ohfb96@gmail.com
          </li>
          <li>
            <AiOutlinePhone />
            96912304
          </li>
        </ul>
      </footer>
    </>
  )
}