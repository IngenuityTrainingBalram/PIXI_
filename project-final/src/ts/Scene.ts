import {
  Application, Container, Point, Sprite, Texture,
} from 'pixi.js';
import { getTexture } from './Textures';
import { Button } from './Button';
import { ReelContainer } from './ReelContainer';
import { Sound } from "./Sound"

export class Scene extends Container {
  public initialized: boolean;

  private center: Point;
  private music = new Sound("../assets/music/finalTone.mp3");
  private reelTone = new Sound("../assets/music/reelTone.wav")


  constructor(private readonly app: Application, parent: Container) {
    super();
    parent.addChild(this);
    this.initialized = false;
    this.center = new Point(this.app.view.width / 2, this.app.view.height / 2);
  }

  public init(): void {
    this.music.loopPlay();
    this.createSprite('gameBG', this.center.x, this.center.y);
    this.createSprite('reelBG', this.center.x, this.center.y);
    const logo = this.createSprite('gameLogo', this.center.x, 50);
    logo.scale.set(0.6);

    const spin = new Button('spin_normal.png', 'spin_over.png', 'spin_down.png', 'spin_disable.png');
    spin.x = this.center.x;
    spin.y = this.app.view.height - spin.height / 2;
    spin.width = 100;
    spin.height = 100;
    this.addChild(spin);
    console.log('spin ', spin);
    const reels = new ReelContainer();
    reels.init();
    this.addChild(reels);
    spin.on('click', () => {
      reels.spin();
      this.reelTone.playMusic();
      // as this sound stops, the reels will stop to move.
      spin.enabled = false;
      setTimeout(() => spin.enabled = true, 3500)
    });

    this.initialized = true;
  }

  private createSprite(textureId: string, x: number, y: number): Sprite {
    const sprite = new Sprite(getTexture(textureId) as Texture);
    sprite.anchor.set(0.5);
    sprite.position.set(x, y);
    return this.addChild(sprite);
  }

  // eslint-disable-next-line class-methods-use-this
  public update(delta?: number) {
    // eslint-disable-next-line no-unused-expressions
    delta;
  }
}
