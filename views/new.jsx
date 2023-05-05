const React = require('react')
const Default = require('./layout/default')

const New = () => {
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
                    <option value='Brenda'>Brenda</option>
                    <option value='Ernesto'>Ernesto</option>
                    <option value='Mia'>Mia</option>
                    <option value='Titi'>Titi</option>
                    <option value='Luz'>Luz</option>
                    <option value='Teddy'>Teddy</option>
                </select>

                <br /> 

                <input type='submit' />
            </form>
        </Default>
    )
}

module.exports = New