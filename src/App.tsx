import './App.css'
import Header from '~/components/header'
import logo from "./assets/notes-logo.svg"
import { CARDS } from './card_data'

const APP_NAME = 'Almost Useful'

export default function App() {

  return (
    <>
        {/* This gets shifted up to the header by react */}
        <title>{APP_NAME}</title>
        <Header title={APP_NAME} avatar={logo} />
        <div className="title-block">
            <h1 className="title-block__title">Places To Go</h1>
        </div>
        <main className="main">
            {CARDS.map((card) => (
                <div className="card" key={card.title}>
                    <h2 className="card__title">{card.title}</h2>
                    <p>{card.description}</p>
                    <a className="card__link" href={card.link}>Learn more</a>
                </div>
            ))}
        </main>

    </>
  )
}
