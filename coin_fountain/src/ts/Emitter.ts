import { ParticleContainer } from "pixi.js";
// and here we will make the plug-in of particle system.

import particles = require('pixi-particles');
// import { getSmily } from "./Textures";

// pixi already has its own ParticleCOntainer, here the same container
// has be extended to make a class, it is just like inheritance.
export class Emitter extends ParticleContainer {
    private pEmitter: particles.Emitter;
    constructor(maxCount: number, props?: any) {
        super(maxCount, props);
        // here three properties are required (1-container where the particles will be stored, 2-how do you want the particle to show up
        // 3- config: particles.EmitterConfig | particles.OldEmitterConfig or particle properties.).
        this.pEmitter = new particles.Emitter(this, "assets/img/coin2.png"
            ,
            {
                "alpha": {
                    "start": 1,
                    "end": 0.8
                },
                "scale": {
                    "start": 0.1,
                    "end": 0.2,
                    "minimumScaleMultiplier": 1
                },
                "color": {
                    "start": "#ffffff",
                    "end": "#9ff3ff"
                },
                "speed": {
                    "start": 1000,
                    "end": 200,
                    "minimumSpeedMultiplier": 1
                },
                "acceleration": {
                    "x": 0,
                    "y": 100
                },
                "maxSpeed": 0,
                "startRotation": {
                    "min": 225,
                    "max": 320
                },
                "noRotation": false,
                "rotationSpeed": {
                    "min": 0,
                    "max": 20
                },
                "lifetime": {
                    "min": 0.25,
                    "max": 0.5
                },
                "blendMode": "normal",
                "frequency": 0.001,
                "emitterLifetime": -1,
                "maxParticles": 1000,
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "addAtBack": false,
                "spawnType": "circle",
                "spawnCircle": {
                    "x": -30,
                    "y": 150,
                    "r": 0
                }
            }
        );

    }
    public start(): void {
        this.pEmitter.emit = true;
        // this.particleContainerName.emit  must be true in order to start the functionality of emitting.
    }

    // if you are using a public function then you can call it from other files like index.ts with using "bind". to call it inside the same file,
    // make it private
    public update(delta: number) {
        this.pEmitter.update(delta)
    }



}