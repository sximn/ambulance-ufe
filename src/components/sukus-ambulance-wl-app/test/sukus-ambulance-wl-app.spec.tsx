import { newSpecPage } from '@stencil/core/testing';
import { SukusAmbulanceWlApp } from '../sukus-ambulance-wl-app';

describe('sukus-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [SukusAmbulanceWlApp],
      html: `<sukus-ambulance-wl-app base-path="/"></sukus-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("sukus-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [SukusAmbulanceWlApp],
      html: `<sukus-ambulance-wl-app base-path="/ambulance-wl/"></sukus-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("sukus-ambulance-wl-list");
  });
});
