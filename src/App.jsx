import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
    </>
  );
}

/*
TODO: 
1) navigation delete btns;
2) use RTK;
3) make ability to create own priorities;
4) change & polish styles everywhere it possible/needble;
5) adaptive layout;
*/
