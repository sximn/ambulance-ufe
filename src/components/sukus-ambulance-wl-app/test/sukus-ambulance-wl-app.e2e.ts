import { newE2EPage } from '@stencil/core/testing';

describe('sukus-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sukus-ambulance-wl-app></sukus-ambulance-wl-app>');

    const element = await page.find('sukus-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
