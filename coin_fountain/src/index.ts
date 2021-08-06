

// import * as PIXI from 'pixi.js'
import './css/main.scss';
import { Application, Ticker } from 'pixi.js';
import { Game } from './ts/Game';
// eslint-disable-next-line import/extensions,import/no-unresolved


window.onload = () => {
    const app = new Application({
        width: 1024,
        height: 700,
        // backgroundColor: ,
        sharedTicker: true,
        sharedLoader: true
    });

    document.body.appendChild(app.view);

    const game = new Game(app);
    const ticker = Ticker.shared;
    ticker.add(game.update.bind(game));
}