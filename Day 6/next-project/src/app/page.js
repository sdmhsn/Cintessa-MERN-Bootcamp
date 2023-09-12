import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const mainStyle = {
    color: 'red',
    background: 'blue',
    border: '1px solid #000',
    width: 100,
    height: '20em',
  };

  return (
    <>
      <div style={mainStyle}></div>
    </>
  );
}
