const React = require('react');
const Default = require('./layout/default');

// function Index()
const Index = ({breads , index}) => {
    return(
        <Default>
            <h2>Index Page</h2>
            <div className='newButton'>
                <a href='/breads/new'><button> Add a new bread </button></a>
            </div>
            <ul>
                {breads.map((bread) => (
                    <li key={bread.id}>
                        <a href={`/breads/${bread.id}`}>
                        {bread.name}
                        </a>
                        </li>
                ))}
            </ul>
        </Default>
    );
};

module.exports = Index;

