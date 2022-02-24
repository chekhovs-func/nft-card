import '../styles/app.scss';
import Card from './Card';

export default function App() {
  return (
    <div className='container'>
      <Card />

      <p className='footer-body'>
        Challenge by{' '}
        <a
          className='footer-link'
          href='https://www.frontendmentor.io/home'
          target={'_blank'}
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          className='footer-link'
          href='https://github.com/chekhovs-func'
          target={'_blank'}
        >
          Robert Butler
        </a>
        .{' '}
      </p>
    </div>
  );
}
