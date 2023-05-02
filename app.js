import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.json({ working: 'Hello App is working' });
});

app.listen(PORT, () => {
	console.log('Server started on port 3000');
});
