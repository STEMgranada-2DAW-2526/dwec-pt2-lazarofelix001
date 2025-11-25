import { useEffect, useReducer } from 'react'
import './App.css'
import arbolLaser from'./assets/arbol_laser.png';
import canionTurron from'./assets/canion_turron.png';
import carameloSangriento from'./assets/caramelo_sangriento.png';
import multiplicador from'./assets/multiplicador.png';
import renoLanzaCohetes from'./assets/reno_lanza_cohetes.png';
import torre from'./assets/torre.png';

const INITIAL_STATE = {
  damageDealt: 0,
  waveGoal: 100,
  caramels:20,
  damagePerShot:1,
  autoShotPerSecond:1,
  upgrades: [],
}
export default function App() {

return(
   <div>
	<div>
		<h1 align = 'center'> Defensor del polo norte</h1>
	</div>
	<div class = 'interfaz'>
		<div><p>Daño de oleada</p></div>
		<div><p>Caramelos</p></div>
		<div><p>Oleada</p></div>
	</div>
	<div>
		<h1>Disparar</h1>
		<img classname = 'canionTurron' src={canionTurron}/>
	</div>

	<div>
	<img classname = 'arbol' src={arbolLaser}/>
	<img classname = 'caramelo' src={carameloSangriento}/>
	<img classname = 'multiplicador' src={multiplicador}/>
	<img classname = 'reno' src={renoLanzaCohetes}/>
	<img classname = 'torre' src={torre}/>
	</div>
   </div>

)
}
