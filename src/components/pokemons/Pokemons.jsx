import { useContext } from 'react';
import Pokemon from './pokemon/Pokemon';
import styles from './Pokemons.module.scss';
import { Context } from '../../services/Context';

const Pokemons = () => {
  const { slicePokemon } = useContext(Context);
  const visible = slicePokemon ? true : false;
  return (
    <div className={styles.pokemons}>
      {visible &&
        slicePokemon.map((pokemon, index) => {
          return <Pokemon name={pokemon.name} key={index} />;
        })}
    </div>
  );
};
export default Pokemons;
