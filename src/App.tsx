import React from 'react';
import { Button, ButtonSize, ButtonType } from './components/Button/Button';
function App() {
  return (
    <div className='App'>
      <Button disabled>click</Button>
      <Button btnType={ButtonType.Primary}>click</Button>
      <Button btnType={ButtonType.Default}>click</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        click
      </Button>
      <Button btnType={ButtonType.Link} href='#' size={ButtonSize.Small}>
        click
      </Button>
      <Button btnType={ButtonType.Link} disabled href='#'>
        click
      </Button>
    </div>
  );
}

export default App;
