describe('Working check', async ()=>{
    it('Should open google website', async ()=>{
        await browser.url('https://www.google.com');
        await expect(browser).toHaveUrl('https://www.google.com/');
    })
})