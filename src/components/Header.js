import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <nav className='nav'>
            <Link to='/'>
                <div><h1>👹 Venting Forum</h1>
                <h4>it's ok you can tell me</h4>
                </div>
            </Link>
        </nav>
    )
}

export default Header
