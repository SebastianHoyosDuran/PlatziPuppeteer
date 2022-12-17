//importar puppeteer
const  puppeteer = require('puppeteer');


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

describe('Primera prueba' , ()=>{

    it(' probando los diferentes tipos de espera', async () => {
		const browser = await puppeteer.launch({
			headless: false,
            defaultViewport:null
		})

		const page = await browser.newPage()
        //{waitUntil:'networkidle0'} espera que la pagina carge 100% 
		await page.goto('https://www.platzi.com' , {waitUntil:'networkidle0'})
        

        //Espera explicita
       delay(10000)


       //Espera hasta que un elemento este disponible
       await page.waitForSelector('#home-public-old > div.PromoBanner.PromoBanner--navidad > a')

        //=== Para cuando se manejen dialog
        page.on('dialog' , async (dialog) => {
            await dialog.accept()
        })

        await page.click('#home-public-old > div.PromoBanner.PromoBanner--navidad > a')
        //Espera por funcion 
        // Se obtiene el texto y se valida que sea igual al parametro
        await page.waitForFunction(() => document.querySelector('#__next > main > section.jsx-3085509967.Hero > div > div > div.jsx-3085509967.Hero-info > h1').innerText === 'En navidad regálate conocimiento' )
    
		await browser.close()
	},100000)

});
