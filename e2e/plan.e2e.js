describe("Example", () => {
  //Executa antes de qualquer testem passa pelo beforeAll. Abre a aplicação
  beforeAll(async () => {
    await device.launchApp();
  });

  //Executa antes de cada test
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it("should have info about cancel subscription", async () => {
    const info = await element(by.text("Cancel anytime. Ofter terms apply."));

    await expect(info).toBeVisible();
  });

  it("shoud subscribe to them premium plan", async () => {
    const clickButton = element(by.id("confirmation-message"));

    await element(by.id("option-premium")).tap();

    await element(by.id("input-email")).tap();

    await element(by.id("input-email")).typeText("charlesti.ptu@gmail.com");

    await new Promise((t) => setTimeout(t, 2000));

    await element(by.id("keyboard")).tap();

    await new Promise((t) => setTimeout(t, 3000));

    await element(by.id("button-subscribe")).tap();

    await device.takeScreenShot("snapshot-premium-plan-test");

    await expect(clickButton).toBeVisible();
    await new Promise((t) => setTimeout(t, 3000));
  });
});
