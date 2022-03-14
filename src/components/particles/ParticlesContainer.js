import React from 'react'
import Particles from 'react-tsparticles';
import particleConfig from './particle-config'


function ParticlesContainer() {
  return (
    <Particles params={particleConfig} ></Particles>
    )
}

export default ParticlesContainer;