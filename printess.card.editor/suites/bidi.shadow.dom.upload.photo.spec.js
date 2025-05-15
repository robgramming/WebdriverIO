describe("Using the BiDi protocol, upload photos to the card editor.", async function() {
    it("should expect the photos button", async function() {
        let photosButton = $("div.bc-tab-item");
        await expect(photosButton).toExist();
    });

    it("should click on the photos button and expect the Upload Images button", async function() {
        let photosButton = $("div.bc-tab-item");
        await photosButton.click();

        let uploadImages = $("input[type=file]");
        await expect(uploadImages).toExist();
    });

    it("should upload image to the card editor.", async function() {
        let filePath = './test_image0.png';
        let remoteFilePath = await browser.uploadFile(filePath);
        let uploadImages = $("input[type=file]");

        await $("uploadImages").setValue(remoteFilePath);
    });

    it("should expect upload image thumbnail to exist", async function() {
        let uploadThumbnail = $("div.bc-image-thumb-container  ");
        await expect(uploadThumbnail).toExist();
    });
});