
const Card = ({selectedActors, remaining, totalCost}) => {
    return (
        <div>
            <h2>Total actors: {selectedActors.length}</h2>
            <h4>Remaining: {remaining}</h4>
            <h4>Total Cost: {totalCost}</h4>
            {
                selectedActors.map((actor, idx) =>(
                    <li key={idx}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Card;