export const PokemonCards = ({ pokemonData }) => {
  const { name, height, weight, base_experience, stats, abilities, types } =
    pokemonData;

  const typeNames = types.map((typeObj) => typeObj.type.name).join(", ");
  const mainAbility = abilities[0]?.ability.name || "N/A";

  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={name}
          className="pokemon-image"
        />
      </figure>

      <div className="pokemon-name">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
      <div className="pokemon-number">#{pokemonData.id.toString().padStart(3, "0")}</div>

      <div className="pokemon-type">
        {typeNames.charAt(0).toUpperCase() + typeNames.slice(1)}
      </div>

      <div className="pokemon-stats">
        <span>Height: {height}</span>
        <span>Weight: {weight}</span>
      </div>

      <div className="pokemon-stats">
        <span>Speed: {stats[5].base_stat}</span>
        <span>Attack: {stats[1].base_stat}</span>
      </div>

      <div className="pokemon-stats">
        <span>EXP: {base_experience}</span>
        <span>Ability: {mainAbility}</span>
      </div>
    </li>
  );
};
