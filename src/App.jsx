import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { Context } from './services/Context';
import { useGetAllPokemonsQuery } from './store/api/api';
import Pokemons from './components/pokemons/Pokemons';
import Pagination from './components/pagination/Pagination';

function App() {
  const { data } = useGetAllPokemonsQuery();
  useEffect(() => {
    data && setSlicePokemon(data.results.slice(0, 10));
  }, [data]);
  const [valueSearch, setValueSearch] = useState('');
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [valueCount, setValueCount] = useState('');
  const [slicePokemon, setSlicePokemon] = useState();
  const [countPages, setCountPages] = useState(100);
  const [page, setPage] = useState(0);
  return (
    <Context.Provider
      value={{
        arr,
        setArr,
        data,
        valueSearch,
        setValueSearch,
        valueCount,
        setValueCount,
        slicePokemon,
        setSlicePokemon,
        countPages,
        setCountPages,
        page,
        setPage,
      }}
    >
      <Header />
      <Pagination />
      <Pokemons />
    </Context.Provider>
  );
}

export default App;
