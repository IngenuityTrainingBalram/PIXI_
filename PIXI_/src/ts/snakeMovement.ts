// import { Application, Container } from "pixi.js";
export function snakeMove(snake_x_speed: number, snake_y_speed: number, image: any, max_width: number, max_height: number) {

    image.position.x += snake_x_speed;
    image.position.y += snake_y_speed;

    if (image.position.x < 0) {
        image.position.x = max_width;

    }
    if (image.position.y < 0) {
        image.position.y = max_height;

    }
    if (image.position.x > max_width) {
        image.position.x = 0;

    }
    if (image.position.y > max_height) {
        image.position.y = 0;

    }
}
