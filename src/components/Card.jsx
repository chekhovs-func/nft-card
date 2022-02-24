import '../styles/card.scss';
import { ReactComponent as EthIcon } from '../assets/icon-ethereum.svg';
import { ReactComponent as ClockIcon } from '../assets/icon-clock.svg';

export default function Card() {
  return (
    <section className='card'>
      <article className='nft'>
        <img
          src='/images/image-equilibrium.jpg'
          alt='An NFT named Equilibrium by Jules Wyvern'
          className='nft image'
        />
        <h1 className='title'>Equilibrium #3429</h1>
        <p className='body'>Our Equilibrium collection promotes balance and calm.</p>
      </article>

      <article className='info'>
        <aside>
          <EthIcon />
          <h2 className='eth value'>0.041ETH</h2>
        </aside>
        <aside>
          <ClockIcon />
          <h2 className='countdown value'>3 days left</h2>
        </aside>
      </article>

      <article className='artist'>
        <img
          src='/images/image-avatar.png'
          alt='An avatar of the artist, Jules Wyvern'
          className='avatar'
        />
        <p className='artist-info'>
          Creation of <a href='#'>Jules Wyvern</a>
        </p>
      </article>
    </section>
  );
}
