import '../styles/card.scss';

export default function Card() {
  const equilibrium = {
    title: 'Equilibrium #3429',
    src: './assets/image-equilibrium.jpg',
    desc: 'Our Equilibrium collection prokotes balance and calm.',
  };

  return (
    <div className='card'>
      <img
        className='nft image'
        src={equilibrium.src}
        alt='An NFT named Equilibrium by Jules Wyvern'
      />
      <h1 className='nft title'>{equilibrium.title}</h1>
      <p className='nft body'>{equilibrium.desc}</p>
    </div>
  );
}
