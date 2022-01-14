import Header from '../structural/header';
import UserLists from '../view/userLists';
import './App.css';

export default function App() {
  return (
    <div className="app">
      {/* app should contain nav, router and 'view' components only */}
      {/* render Banner here so it does not disappear between view loads */}
      <Header />
      <UserLists />
    </div>
  );
}