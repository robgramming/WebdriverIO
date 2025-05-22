import path from 'path';

describe("Using the BiDi protocol, upload photos to the card editor.", async function() {
    it("should expect the photos button", async function() {
        let photosButton = $("div.bc-tab-nav div.bc-tab-item");
        await expect(photosButton).toExist();

        await browser.pause(1000);
    });

    it("should click on the photos button and expect the Upload Images button", async function() {
        let photosButton = $("div.bc-tab-nav div.bc-tab-item");
        await photosButton.click();

        let uploadImages = $("input[type=file]");
        await expect(uploadImages).toExist();
    });

    it("should upload image to the card editor.", async function() { 
        await browser.execute("document.querySelector('printess-component').shadowRoot.querySelector('input[type=file]').style.display = 'block';");
                       
        let filePath = path.join(import.meta.dirname, 'test_image0.png');
        let uploadImages = await $("input[type=file]");
        
        console.log('filePath = '+filePath);
        await $(uploadImages).setValue(filePath);
    });

    it("should expect upload image thumbnail to exist", async function() {
        let uploadThumbnail = $("div.bc-image-thumb-container  ");
        await expect(uploadThumbnail).toExist();
    });
});