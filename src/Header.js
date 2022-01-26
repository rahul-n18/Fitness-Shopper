import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import { ShoppingCart } from '@material-ui/icons';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue()

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://github.com/ripperkumar/gym-ecommerce-site/blob/main/images/logo.jpg?raw=true" alt="" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>


                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Membership</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <div className="header__optionLineOne">
                            <ShoppingCart />
                        </div>
                        <div className="header__optionLineTwo">
                            <span className="header__basketCount">{basket?.length}</span>
                        </div>

                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Header
