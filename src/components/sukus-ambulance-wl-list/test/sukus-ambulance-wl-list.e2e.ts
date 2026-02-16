import { newE2EPage } from '@stencil/core/testing';

describe('sukus-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sukus-ambulance-wl-list></sukus-ambulance-wl-list>');

    const element = await page.find('sukus-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
