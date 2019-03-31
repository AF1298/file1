import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];

    // Port : 9000
    loadingPromises.push(loadApp('React', '/toReact', '/toReact/singleSpaEntry.js', '/toReact/store.js', globalEventDistributor));

    // Port : 9002
    loadingPromises.push(loadApp('Vue', '/toVue', '/toVue/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    // Port : 9003
    loadingPromises.push(loadApp('Antd', '/toAntd', '/toAntd/singleSpaEntry.js', null, null));

    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();

