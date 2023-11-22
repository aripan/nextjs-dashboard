import styles from "./footer.module.css";

export interface IFooterUIProps {}
const FooterUI: React.FunctionComponent<IFooterUIProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Asad Ripan</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};
export default FooterUI;
