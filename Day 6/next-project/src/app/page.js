import './main.css';
import style from './text.module.css';

export default function Home() {
  const mainStyle = {
    background: 'blue',
    border: '1px solid #000',
    width: 100,
    height: '20em',
  };

  return (
    <>
      <div style={mainStyle}>
        <h3 className="textRed">Halo</h3>
        <h3 className={style.textRed}>Halo</h3>
      </div>
    </>
  );
}
