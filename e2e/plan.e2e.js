describe("Example", () => {
  //Executa antes de qualquer testem passa pelo beforeAll. Abre a aplicação
  beforeAll(async () => {
    await device.launchApp();
  });

  //Executa antes de cada test
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });
});
