//importar puppeteer
const  puppeteer = require('puppeteer');


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 jest.setTimeout(100000)


describe('Primera prueba' , ()=>{

    it(' Extraer titulo y URL', async () => {
		const browser = await puppeteer.launch({
			headless: false,
            defaultViewport:null
		})

		const page = await browser.newPage()
        await page.goto('https://www.platzi.com' , {waitUntil:'networkidle0'})

        //Obtener titulo
        const titulo = await page.title()
        //Obtener url
        const url = await page.url()

        //Plasmarlo en la consola
        console.log('Titulo' , titulo)
        console.log('Url' , url)
        
		await browser.close()
	})


    it(' Extraer de elementos', async () => {


		const browser = await puppeteer.launch({
			headless: false,
            defaultViewport:null
		})

		const page = await browser.newPage()
        await page.goto('https://www.platzi.com' , {waitUntil:'networkidle0'})

        await page.waitForSelector('#home-public-old > section.TrustedList > div > h2')
        console.log('Encontro el elemento')

        //Obtener contenido por css selector de un elemento
        const tituloPlatzi = await page.$eval('#home-public-old > section.TrustedList > div > h2', (elementText)=>elementText.textContent)
        console.log('H1 ' , tituloPlatzi)

        //Obtener contenido por xpath selector de un elemento
        const [textoInicial] = await page.$x('//*[@id="home-public-old"]/section[3]/div/h2')
        const propiedad = await textoInicial.getProperty('textContent')
        const texto = await propiedad.jsonValue()
        console.log('Texto ' , texto)


        //Segunda forma para obtener texto por xpaths


		await browser.close()
	})


});
