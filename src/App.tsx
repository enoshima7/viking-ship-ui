import React from 'react';
import { Button, ButtonSize, ButtonType } from './components/Button/Button';
import { Menu } from './components/Menu/Menu';
import { MenuItem } from './components/Menu/MenuItem';
import { SubMenu } from './components/Menu/SubMenu';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Menu defaultOpenSubMenus={['0']} defaultIndex='0' mode='vertical'>
          <SubMenu title='dropdown'>
            <MenuItem>cool link 1</MenuItem>
            <MenuItem>cool link 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
