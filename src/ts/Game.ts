import {
    Application, Container, Resource, Texture, Sprite,
} from 'pixi.js';
import { snakeMove } from './snakeMovement';

// import * as PIXI from 'pixi.js';
import { getTexture } from './Textures';
import { preLoader } from './PreLoader';
import assets from './assets';

export class Game {
    private stage: Container;

    private app: Application;

    private readonly background: Container;
    private snake: any;
    private food: any;
    private Sbody: any;
    private snake_speed = 5;
    private snake_x_speed = 0;
    private snake_y_speed = 0;
    // private keyMap: { [key: string]: boolean } = {};


    constructor(app: Application) {
        this.app = app;
        this.stage = app.stage;
        this.Sbody = this.Sbody;
        this.background = new Container();
        this.stage.addChild(this.background);
        preLoader(assets, () => {
            this.createBack(getTexture('back') as Texture<Resource>);
            // this.snake = this.createImageSnake(getTexture('snake') as Texture<Resource>);
            this.snake = this.createImageSnake();
            this.food = this.createImageFood();
        });

    }

    private createBack(texture: Texture): Sprite {
        const img = Sprite.from(texture);
        img.position.set(0, 0);
        img.width = this.app.view.width;
        img.height = this.app.view.height;
        return this.background.addChild(img);

    }

    private createImageSnake(): any {
        const img = new Sprite(getTexture('snake') as Texture<Resource>);
        img.anchor.set(0.5);
        img.scale.set(0.15);
        img.position.set(this.app.view.width / 2, this.app.view.height / 2);


        window.onkeydown = (e) => {
            switch (e.code) {
                case 'ArrowRight':
                    if (this.snake_x_speed != -this.snake_speed) {
                        this.snake_x_speed = this.snake_speed;
                        this.snake_y_speed = 0;
                    }
                    break;
                case 'ArrowLeft':
                    if (this.snake_x_speed != this.snake_speed) {
                        this.snake_x_speed = -this.snake_speed;
                        this.snake_y_speed = 0;
                    }
                    break;
                case 'ArrowUp':
                    if (this.snake_y_speed != this.snake_speed) {
                        this.snake_x_speed = 0;
                        this.snake_y_speed = -this.snake_speed;
                    }
                    break;
                case 'ArrowDown':
                    if (this.snake_y_speed != -this.snake_speed) {
                        this.snake_x_speed = 0;
                        this.snake_y_speed = this.snake_speed;
                    }
                    break;

                case 'Space':
                    this.snake_x_speed = 0;
                    this.snake_y_speed = 0;
            }
            console.log(e.code);
        }
        return this.background.addChild(img);
    }
    private createImageFood(): any {
        const img = new Sprite(getTexture('food') as Texture<Resource>);
        img.anchor.set(0.5);
        img.scale.set(0.15);
        img.position.set(Math.random() * this.app.view.width, Math.random() * this.app.view.height);
        // img.position.set(this.app.view.width / 1.5, this.app.view.height - 500);
        return this.background.addChild(img);
    }


    public update(): void {
        if (this.snake) {
            // this.snake.position.x += this.snake_x_speed;
            // this.snake.position.y += this.snake_y_speed;
            if (this.collision(this.snake, this.food)) {
                this.snake_x_speed = this.snake_x_speed;
                this.snake_y_speed = this.snake_y_speed;
                this.background.removeChild(this.food);
                this.food = this.createImageFood();




            }
            snakeMove(this.snake_x_speed, this.snake_y_speed, this.snake, this.app.view.width, this.app.view.height)
        }
    }
    private collision(image1: any, image2: any) {
        let strike1 = image1.position;
        let strike2 = image2.position;
        return strike1.x < strike2.x + image2.width
            && strike1.x + image1.width > strike2.x
            && strike1.y < strike2.y + image2.height
            && strike1.y + image1.height > strike2.y
    }
}