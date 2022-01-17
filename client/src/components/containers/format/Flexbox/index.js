export default function Flexbox({ flexOptions, children }) {
  const styles = { display: 'flex' };

  Object.assign(styles, flexOptions);

  return <div className={styles.default} style={styles}>{children}</div>;
}