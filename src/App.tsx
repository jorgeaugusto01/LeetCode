import './App.css'

//Components
import ArraySolutions from './Components/ArraySolutions';
import StringSolutions from './Components/StringSolutions';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';


function App() {

  return (
    <div className="App">

    <TabView>
      <TabPanel header="Array"
                prevButton={<button>Prev</button>}
                nextButton={<button>Next</button>}
                closeIcon={<span>X</span>}>
            <ArraySolutions/>
        </TabPanel>
        <TabPanel header="String"
                prevButton={<button>Prev</button>}
                nextButton={<button>Next</button>}
                closeIcon={<span>X</span>}>
            <StringSolutions/>
        </TabPanel>
      </TabView>
    </div>
  );
}

export default App
