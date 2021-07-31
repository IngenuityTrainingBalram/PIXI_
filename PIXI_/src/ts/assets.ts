export type Assets = {
    baseUrl: string;
    images: { key: string, url: string }[];
};
export default {
    baseUrl: './assets/img',
    images: [
        {
            key: 'snake',
            url: 'snake.png',
        },
        {
            key: 'food',
            url: 'food.png',
        },
        {
            key: 'back',
            url: 'back.jpg'
        },
        {
            key: 'body',
            url: 'body.png'
        }
    ],
};
