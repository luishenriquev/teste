
import styles from '../../../styles/Home.module.css';

type Props = {
  title: any;
  fontSize?: any;
  fontFamily: any;
  cor?: any;
  fontWeight?: any;
  flexDirection?: any; 
  display?: any;
}

export default function Title({ title, fontSize, fontFamily, cor,  fontWeight, flexDirection, display }: Props) {
  return (
    <div className={styles.cardTitleOptions}>
      <p className={styles.FontTitleOptions} style={{ fontSize: fontSize, fontFamily: fontFamily, color: cor, fontWeight: fontWeight, display: display, flexDirection: flexDirection }} >
        {title}<br />
      </p>
    </div>
  )
}
