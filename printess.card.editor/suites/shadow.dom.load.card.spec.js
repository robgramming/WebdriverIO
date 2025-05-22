describe("Select a card layout from the shadow DOM", async function() {
    it("should expect an array of 10 card layouts", async function() {
        let cardLayouts = await $('printess-component').shadow$$("bc-select-layout-overlay img[loading=lazy]");
        await expect(cardLayouts).toBeElementsArrayOfSize(10);
    });

    it("should choose the first card layout", async function() {
        let cardLayouts = await $('printess-component').shadow$$("bc-select-layout-overlay img[loading=lazy]");
        await cardLayouts[0].click();
    });

    it("should confirm the card editor toolbar loaded.", async function() {
        let cardEditorToolbar = await $('printess-component').shadow$("bc-panel-top-default");
        await expect(cardEditorToolbar).toExist();
    });
});