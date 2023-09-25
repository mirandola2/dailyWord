export default {
	async fetch(request, env, ctx) {
	  
	  const url = "https://liturgia.silvestrini.org/rss_giorno.xml";
  
	  /**
	   * gatherResponse awaits and returns a response body as a string.
	   * Use await gatherResponse(..) in an async function to get the response body
	   * @param {Response} response
	   */
	  async function gatherResponse(response) {
		const { headers } = response;
		const contentType = headers.get("content-type") || "";
		if (contentType.includes("application/json")) {
		  return JSON.stringify(await response.json());
		}
		return response.text();
	  }
  
	  const init = {
		headers: {
		  "content-type": "application/xml;charset=UTF-8",
		},
	  };
  
	  const response = await fetch(url, init);
	  const results = await gatherResponse(response);
	  return new Response(results, init);
	},
  };