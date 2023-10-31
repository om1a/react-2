import React from 'react';

function Restaurant() {
    const [data, setData] = React.useState([]);
    const getData = async(name) => {
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=' + name);
        const jsonData = await response.json();
        setData(jsonData.recipes);
    };

    return (
        <>
        <div className='d-flex justify-content-center align-items-center p-5'>
            <button onClick={() => getData("pizza")}>Pizza</button>
            <button onClick={() => getData("Salad")}>Salad</button>
            <button onClick={() => getData("Onion")}>Onion</button>
        </div>
        <div className='row'>{data.map((p)=> (
            <div className='col-md-6' key={p.id}>
                <h1>{p.title}</h1>
                <img src={p.image_url} alt={p.title} />
                <p>{p.description}</p>
            </div>
        ))}</div>
        </>
    )
}

export default Restaurant;
