import { Sprite, Texture } from 'pixi.js';
import { getTexture } from './Textures';

export class Button extends Sprite {
  private readonly up: Texture;

  private readonly down: Texture;

  private readonly over: Texture;

  private readonly disabled: Texture;

  public set enabled(value: boolean) {
    this.interactive = value;
    this.buttonMode = value;
    this.texture = value ? this.up : this.disabled;
  }
  //constructor for the buttons.
  constructor(up: string, over: string, down: string, disabled: string) {
    super(getTexture(up) as Texture);
    //texturer for all of the buttons.
    this.up = this.texture;
    this.down = getTexture(down) as Texture;
    this.over = getTexture(over) as Texture;
    this.disabled = getTexture(disabled) as Texture;

    this.anchor.set(0.5);
    //add the interaction mode and nutton like activity on the button image by following methods.
    this.interactive = true;
    this.buttonMode = true;
    this.on('pointerover', () => {
      if (this.interactive) {
        this.texture = this.over;
      } else {
        this.texture = this.disabled;
      }
    });



    this.on('pointerdown', () => {
      this.texture = this.down;
    });
    this.on('pointerup', () => {
      if (this.interactive) {
        this.texture = this.over;
      } else {
        this.texture = this.disabled;
      }
    });
    this.on('pointerout', () => {
      this.texture = this.up;
    });
  }
}
