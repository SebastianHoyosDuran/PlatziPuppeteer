const  puppeteer = require('puppeteer');


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 //Seteo de timeout para todas las pruebas
 jest.setTimeout(100000)


 let browser
 let page

//Son usados para corre uno sola vez antes de que inicien los test
 //beforeAll(async()=>{})

 //Son usados para corre uno sola vez antes de que finalicen los test
 //afterAll(async()=>{})


//Se corre antes de cada uno de los tests
beforeEach(async()=>{
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport:null
    })

    page = await browser.newPage()
})
//Se corre despues de cada uno de los tests
 afterEach(async()=>{
	await browser.close()
 })

describe('Primera prueba' , ()=>{

    it(' Extraer titulo y URL', async () => {
		 
        await page.goto('https://www.platzi.com' , {waitUntil:'networkidle0'})

        //Obtener titulo
        const titulo = await page.title()
        //Obtener url
        const url = await page.url()

        //Plasmarlo en la consola
        console.log('Titulo' , titulo)
        console.log('Url' , url)
        
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

	})


});
