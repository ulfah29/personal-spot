import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="row">
      <div className="col-3 border-end">
        <Sidebar />
      </div>
      <div className="col-9">
        <Content />
      </div>
    </div>
  )
}

export default App
