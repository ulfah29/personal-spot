import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from '@vercel/analytics/react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="container container-wrapper">
      <div className="row">
        <div className="col-lg-3 border-end col-md-12">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-12">
          <Content />
        </div>
      </div>
      <Analytics />
    </div>
  )
}

export default App
