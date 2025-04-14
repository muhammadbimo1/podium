import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const drivers = [
    { name: 'Max Verstappen', id: '76561198044739019' },
    { name: 'Lewis Hamilton', id: '76561198045134497' },
    { name: 'Charles Leclerc', id: '76561198044739019' },
    { name: 'Carlos Sainz', id: '76561198045134497' },
    { name: 'Lando Norris', id: '76561198044739019' },
  ]

  return (
    <>
    <h1>Race Result</h1>
      <div className="podium-container">
        <div className="podium">
          {/* Second Place */}
          <div className="podium-spot second">
          <img src="/SBX_Silhouette_5.webp" className="podium-image" alt="Driver silhouette" width={300} />
            <div className="podium-base second-base">
              <h2>2nd</h2>
              <h3>{drivers[1].name}</h3>
            </div>
          </div>
          {/* First Place */}
          <div className="podium-spot first">
          <img src="/SBX_Silhouette_5.webp" className="podium-image" alt="Driver silhouette" width={300} />
            <div className="podium-base first-base">
              <h2>1st</h2>
              <h3>{drivers[0].name}</h3>
            </div>
          </div>
          
          {/* Third Place */}
          <div className="podium-spot third">
          <img src="/SBX_Silhouette_5.webp" className="podium-image" alt="Driver silhouette" width={300} />
            <div className="podium-base third-base">
              <h2>3rd</h2>
              <h3>{drivers[2].name}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App