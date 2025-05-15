describe("Load the Printess Greetings Card editor", async function() {
    it("should wait for the editor to finish loading.", async function() {
        await browser.url("https://www.printess.com/samples/buyer-side-bcui.html?name=Greeting%20Card%20New");
        
        let printessLoading = browser.$(".printess-loading-logo");
        await expect(printessLoading).toExist();
        await expect(printessLoading).not.toExist();
    });
});