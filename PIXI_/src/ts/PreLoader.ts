import {
    Loader,
} from 'pixi.js';
import { setResources } from './Textures';
import { Assets } from './assets';

function addAssets(loader: Loader, assets: { key: string, url: string }[]): void {
    assets.forEach((asset) => {
        loader.add(asset);
    });
}


function loadComplete(loader: Loader, onCompleteCallback: () => void): void {
    setResources(loader.resources);
    onCompleteCallback();
}

export function preLoader(assetList: Assets, callback: () => void): Loader {
    const loader = Loader.shared;
    if (assetList.baseUrl) {
        loader.baseUrl = assetList.baseUrl;
    }
    addAssets(loader, assetList.images);
    loader.onComplete.add((l: Loader) => {
        loadComplete(l, callback);
    });
    loader.load();
    return loader;
}
