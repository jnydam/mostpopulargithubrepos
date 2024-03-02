import styles from './HeaderComp.module.css';
import greyGithubIconGraphic from '../../../assets/githubvectortitle.svg';

const HeaderComp: React.FC = () => {
  return (
    <div className={styles.headerStyle}>
      <div className={styles.headerOverlayStyle}>
        {/* <img
          style={{
            height: '1.2rem',
            width: '1.2rem',
            marginRight: '1rem',
          }}
          src={greyInfoIconGraphic}
        ></img> */}
      </div>
      <img
        style={{
          height: '2rem',
          width: '2rem',
        }}
        src={greyGithubIconGraphic}
      ></img>
      <span
        style={{
          marginLeft: '1rem',
          fontSize: '1.1rem',
        }}
      >
        Most Popular Github Repositories
      </span>
    </div>
  );
};

export default HeaderComp;
