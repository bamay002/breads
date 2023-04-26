const React = require('react')

const Default = require('./layout/default')

//JSX Component
const Show =({bread}) => {
    //console.log(bread.name)
    return(
        <Default>
            <h2 style={{color: "#d6b1e5"}}>Show Page</h2>
            <h3 style={{color: "purple"}}>{bread.name}</h3>
            <p>
                It 
                {
                    bread.hasGluten 
                    ? <span> Does </span>             //if hasGluten is true this
                    : <span> Does NOT </span>         //else do this
                }   
                Contain Gluten.
            </p>
            <img width="480" src={bread.image} alt={bread.name} />
            <li>
                <a href='/breads'>Go To HomePage</a>
            </li> 
        </Default>
    )
}

module.exports = Show