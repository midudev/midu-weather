export async function getWeatherFrom(query = 'Buenos Aires') {
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
