import './styles.css'
import playerX  from "../../img/X.png"
import playerO from "../../img/Circle.png"

const Player = (props) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;

    return (<button className='player'>
        <img src={players[props.player]} alt={`Jogador ${props.player.toUpperCase()}`}/>
    </button>)
};

export default Player;