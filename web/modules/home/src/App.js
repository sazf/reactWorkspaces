import './styles.css';
import { Hello1 } from './components/Hello';
import { Hello2 } from './components/Hello';

import { Header } from '@fstr/components';

export default function App() {
  return (
    <div className='App'>
      <Header text='from root' />
      <Hello1 />
      <Hello2 />
    </div>
  );
}
