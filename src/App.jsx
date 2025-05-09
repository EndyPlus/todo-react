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
1) Update navigation;
2) Change & polish styles everywhere it possible/needble;
3) Adaptive layout;
*/
