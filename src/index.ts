const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

export default {
	async fetch(request: Request) {
	  
	  const url = 'https://liturgia.silvestrini.org/rss_giorno.xml'
	  

	  const dailyObject = new XMLParser().parse(await (await fetch(url)).text())
	  console.log(dailyObject.rss.channel)
	  return new Response(JSON.stringify(dailyObject, undefined, 4));
	},
  };