//importar puppeteer
const  puppeteer = require('puppeteer');

//Aca inicia la prueba

/*
describe('Titulo de prueba' , ()=>{


    **Pasos **
    it('Titulo del paso', async()=>{
        **configuracion del navegador 
        headless = false
    })
    pasos
    abrir navegador
    ir para
    esperar
    cerrar
})
*/
describe('Primera prueba' , ()=>{

    it('Debe abrir y cerrar el navegador', async () => {
		const browser = await puppeteer.launch({
            //headless para reproducir la prueba en segundo plano
			headless: false,
            //slowMo para que la prueba corra mas lento
            //slowMo:0,
            //devTools para abrir el navegador con la vista de desarrollador
            //devtool : false,
            //dimensaiones del navegador
            defaultViewport:null
            //tamaño del navegador en la ventana de chrome
            //args:['--window-size=1920,1080']
		})

		const page = await browser.newPage()
		await page.goto('https://www.github.com/')
        //espera explicita
		//await page.waitForTimeout(5000);
        //esperar por un selector
        await page.waitForSelector('img')
        //recargar
        await page.reload()

        //navegar a otro sitio
        await page.goto('https://www.platzi.com/')
        await page.waitForXPath('(//button[(text()="Entra a Platzi")])[1]')

        //navegar hacia atras
        await page.goBack()
        await page.waitForSelector('img')

        //navegar hacia adelante
        await page.goForward()
        await page.waitForXPath('(//button[(text()="Entra a Platzi")])[1]')


        //abrir nueva pagina
		const page2 = await browser.newPage()
        await page2.goto('https://www.google.com/')
        await page2.waitForSelector('img')
        
		await browser.close()
	},100000)

});
