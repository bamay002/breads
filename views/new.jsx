const React = require('react')
const Default = require('./layout/default')

const New = ({bakers}) => {
    return(
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required ></input>

                <label htmlFor='image'>Image URL</label>
                <input type='text' name='image' id='image'></input>

                <label>
                    <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked></input>
                    &nbsp; Has Gluten? 
                </label>

                <label htmlFor='baker'>Baker</label>
                <select name='baker' id='baker'>
                    {bakers.map((baker) => {
                        return(
                            <option value={baker.id} key={baker.id}>{baker.name}</option>
                        )
                    })}
                </select>

                <br /> 

                <input type='submit' />
            </form>
        </Default>
    )
}

module.exports = New