// Function to read quotes from a file
function getQuotes() {
	return fetch('./quotes.txt')
	  .then(response => {
		if (!response.ok) {
		  throw new Error('Failed to fetch quotes');
		}
		return response.text();
	  })
	  .then(data => data.split('\n'))
	  .catch(error => {
		console.error('Error fetching quotes:', error);
		throw error;
	  });
  }
  
  async function getRandomQuote() {
	try {
	  const quotes = await getQuotes();
	  const randomIndex = Math.floor(Math.random() * quotes.length);
	  const randomQuote = quotes[randomIndex];
	  document.getElementById('quote').textContent = randomQuote;
	} catch (error) {
	  console.error('Error fetching quotes:', error);
	}
  }
  
  // Add event listener to the button
  document.getElementById('new-quote').addEventListener('click', getRandomQuote);
  
  // Initial quote display
  getRandomQuote();
  