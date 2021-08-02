import { Application, Ticker } from 'pixi.js';
import { Sound } from '@pixi/sound';
import "./css/main.scss";
import { Game } from "./ts/Game";
onload = () => {

    const app = new Application({

        width: 800,
        height: 600,
        // backgroundColor: 0x66FF33,
        resizeTo: window,
        sharedTicker: true
    });

    document.body.appendChild(app.view);
    const sound = Sound.from('./src/ts/snakeSound.mp3');
    sound.play();

    const game = new Game(app);
    const ticker = Ticker.shared;
    ticker.add(game.update.bind(game));

}