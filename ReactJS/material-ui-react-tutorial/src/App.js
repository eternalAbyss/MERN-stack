import {useState} from 'react'
import Buttons from './components/Button'
import CheckBoxExample from './components/checkbox'

const App = () => {
    const [isHoveredOn, setIsHoveredOn] = useState(false)
    const [checked, setChecked] = useState(false)
    
    const handleHover = () => {
        setIsHoveredOn(!isHoveredOn)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Buttons 
                    isHoveredOn={isHoveredOn}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover} 
                />
                <br/>
                <br/>
                <hr/>
                <CheckBoxExample 
                    checked={checked}
                    onChange={(e)=>setChecked(e.target.checked)}
                />
            </header>
        </div>
    )
}

export default App