import { useGetPokemonQuery } from '../../../store/api/api';
import styles from './Pokemon.module.scss';

const Pokemon = ({ name }) => {
  const { isLoading, data } = useGetPokemonQuery(name);
  return (
    <>
      {data && (
        <div className={styles.pokemon}>
          <img src={data.sprites.front_default} />
          <ul>
            <li>
              <b>name:</b>
              <div>{name}</div>
            </li>
            <li>
              <b>height:</b>
              <div>{data.height}</div>
            </li>
            <li>
              <b>weight:</b>
              <div>{data.weight}</div>
            </li>
            <li>
              <b>types:</b>
              {data.types.map((type, index) => {
                return (
                  <div key={index} style={{ marginRight: '5px' }}>
                    {type.type.name}
                    {index !== data.types.length - 1 && ','}
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Pokemon;
