const React = require('react');

const indStyle = {
    color: '#FFFF66',
    backgroundColor:'#1919FF',
    
}

function Index(props){
    
    return(
    <div style={indStyle}>
        <h1>See all the Pokemon!</h1>
        <ol>
            {props.pokemon.map((poke, index) => <li key={poke.name}><a href={'/pokemon/' + index}>{poke.name[0].toUpperCase() + poke.name.slice(1)} </a><br/>{poke.img}</li>)}
        </ol>
    </div>
    )
}
module.exports = Index;