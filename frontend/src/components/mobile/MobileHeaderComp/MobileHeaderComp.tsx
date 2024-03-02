import styles from './MobileHeaderComp.module.css';
import mainGithubIcon from '../../../assets/githubvectortitle.svg';

const MobileHeaderComp: React.FC = () => {
  return (
    <div className={styles.mobileHeaderCompContainer}>
      <img
        style={{
          height: '2.5rem',
          width: '2.5rem',
          marginBottom: '0.7rem',
        }}
        src={mainGithubIcon}
      ></img>
      <span
        style={{
          fontSize: '0.9rem',
        }}
      >
        Most Popular
      </span>
      <span
        style={{
          fontSize: '0.9rem',
        }}
      >
        Github Repositories
      </span>
    </div>
  );
};

export default MobileHeaderComp;
