import React from 'react';
import classes from './header.module.css';

export default function Header() {
  const user = {
    name: 'john'
  };
  const cart = {
    totalCount: 10,
  };
  const logout = () => {}

  return (
    <header className ={classes.header}>
      <div className ={classes.container}>
        <link to="/" className={classes.logo}>
          FoodZy!
        </link>
        <nav>
          <ul>
            {user? (
                <li className={classes.menu_container}>
                <link to="/profile">{user.name}</link>
                <div className={classes.menu}>
                  <link to="/profile">Profile</link>
                  <link to="/orders">Orders</link>
                </div>
              </li>
              ) : (
                <link to="/login">Login</link>
              )
            }
            <link to="/cart">
              Cart
              {cart.totalCount > 0 && <span>{cart.totalCount}</span>}
            </link>
          </ul>
        </nav>
      </div>
    </header>
  )
}