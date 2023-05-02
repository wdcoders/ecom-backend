import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.json({ working: 'Hello App is working' });
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
