import { XMLParser } from "fast-xml-parser";

export default {
	async fetch(request: Request) {

	  function capitalizeFirstLetter(string: String) {
		return string[0].toUpperCase() + string.slice(1);
	}

	  const date = new Date(); 
	  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
	  const day = date.toLocaleDateString('it-IT', { weekday: 'long'})
	  
	  const url = 'https://liturgia.silvestrini.org/rss'

	  const dailyRawObject = new XMLParser().parse(await (await fetch(url)).text())
	  const dailyInfo = {Letture : '', CantoVangelo: '', Link:''}

	  dailyRawObject.rss.channel.item.forEach((item: any) => {
		if(item.title == `${formattedDate} - Letture di ${capitalizeFirstLetter(day)}`){
			
			const itemParts = String(item.description).split('\n\n')
			

			dailyInfo.Letture = itemParts[0].trim()
			dailyInfo.Link = item.link

			itemParts.forEach(i=>{
				if(i.includes('CANTO AL VANGELO')){
					dailyInfo.CantoVangelo=i.split('Alleluia.').slice(-2)[0].replace(/(?:\r\n|\r|\n)/g, ' ').trim()
				}
			})
		}
	  });

	  return new Response(JSON.stringify(dailyInfo, undefined, 4));
	},
  };