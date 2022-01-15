import './Main.css';

export default function Main({ children }) {
  return (
    <main className="main">
      <div className="main__content__container">
        {children}
      </div>
    </main>
  );
}