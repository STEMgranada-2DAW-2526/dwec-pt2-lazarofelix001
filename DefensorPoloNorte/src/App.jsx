import { useEffect, useReducer } from 'react'
import './App.css'
import './assets/arbol_laser.png';
import './assets/canion_turron.png';
import './assets/caramelo_sangriento.png';
import './assets/multiplicador.png';
import './assets/reno_lanza_cohetes.png';
import './assets/torre.png';

const INITIAL_STATE = {
  damageDealt: 0,
  waveGoal: 100,
  caramels:20,
  damagePerShot:1,
  autoShotPerSecond:1,
  upgrades: [],
}
