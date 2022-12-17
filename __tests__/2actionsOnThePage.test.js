const  puppeteer = require('puppeteer');

describe('Primera prueba' , ()=>{

    it(' Interactuando con elementos', async () => {
		const browser = await puppeteer.launch({
			headless: false,
            defaultViewport:null
		})

		const page = await browser.newPage()
		await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
     

        //=== Para cuando se manejen dialog

        page.on('dialog' , async (dialog) => {
            await dialog.accept()
        })

      





        //** Acciones */
        //--Click derecho
        
         //para pasar mas instrucionnes se abre corchetes
        await page.click('#authentication > span',{
            button:'right',
            delay:500
        })
        await page.click('#authentication > span')
        await page.waitForTimeout(5000)

        //--Doble Click
        await page.click('#authentication > button',{
            button:'left',
            // clickCount para dar x cantidad de clicks
            clickCount:2,
            delay:500
        })
       
        await page.goto('https://devexpress.github.io/testcafe/example/')
        //Escribir en un textbox
        await page.type('#developer-name','Sebastian Hoyos', ({
            delay:100
        }) )
        //Click en un checkbox
        await page.click('#remote-testing', ({
            delay:100
        }))
        await page.click('#reusing-js-code' , ({
            delay:100
        }))
        await page.click('#tried-test-cafe' , ({
            delay:100
        }))
        await page.type('#comments', 'This is a comment' , ({
            delay:100
        }))

		await browser.close()
	},100000)

});
