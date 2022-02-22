import '../styles/card.scss';

export default function Card() {
  return (
    <div className='card'>
      <img
        className='nft'
        src='./public/assets/image-equilibrium.jpg' // NOT LOADING?!
        alt='An NFT named Equilibrium by Jules Wyvern'
      />
    </div>
  );
}
