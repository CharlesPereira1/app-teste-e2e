describe("Example", () => {
  //Executa antes de qualquer testem passa pelo beforeAll. Abre a aplicação
  beforeAll(async () => {
    await device.launchApp();
  });

  //Executa antes de cada test
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have info about cancel subscription", async () => {
    const info = await element(by.text("Cancel anytime. Ofter terms apply."));

    await expect(info).toBeVisible();
  });
});
