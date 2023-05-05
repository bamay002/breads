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
            <p>{bread.getBakedby()}</p>
            
            <li className='showbuttons'>
                <a href='/breads'><button>Go To HomePage</button></a>
            </li> 

            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                <input className='showbuttons' type='submit' value='DELETE'></input>
                </form>
        </Default>
    )
}

module.exports = Show