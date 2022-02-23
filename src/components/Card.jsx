import '../styles/card.scss';
import { ReactComponent as EthIcon } from '../assets/icon-ethereum.svg';
import { ReactComponent as ClockIcon } from '../assets/icon-clock.svg';

export default function Card() {
  const equilibrium = {
    title: 'Equilibrium #3429',
    src: './assets/image-equilibrium.jpg',
    desc: 'Our Equilibrium collection prokotes balance and calm.',
  };

  return (
    <section className='card'>
      <article className='nft'>
        <img
          src={equilibrium.src}
          alt='An NFT named Equilibrium by Jules Wyvern'
          className='nft image'
        />
        <h1 className='title'>{equilibrium.title}</h1>
        <p className='body'>{equilibrium.desc}</p>
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
    </section>
  );
}
