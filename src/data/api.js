import { create } from 'apisauce';

let climaidApiHost;
const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
	climaidApiHost = 'http://localhost:3026';
} else {
	climaidApiHost = 'https://services.senti.cloud/climaid-backend';
}

export const climaidApi = create({
	baseURL: climaidApiHost,
	timeout: 30000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
});

export const getRoom = async (uuid) => {
	let data = await climaidApi.get('/feedback/room/' + uuid).then(rs => rs.data);
	return data;
};

export const getRoomMeasurements = async (uuid) => {
	let data = await climaidApi.get('/feedback/measurements/' + uuid).then(rs => rs.data);
	return data;
};