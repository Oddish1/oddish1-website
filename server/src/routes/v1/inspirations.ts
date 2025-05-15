import express from 'express';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import { uploadImageToS3 } from '../../utils/upload.ts';
// import all routes for v1 api interests (if any in external files) here


const router = express.Router();
const prisma = new PrismaClient();
const upload = multer({ storage: multer.memoryStorage() });

// define GET for api route '/api/v1/inspirations'
router.get('/inspirations', async (_req: express.Request, res: express.Response) => {
    // query database for all interests
    try {
	const allInspirations = await prisma.inspiration.findMany();
	return res.status(200).json(allInspirations);
    } catch (err) {
	console.error(err);
	return res.status(500).json({ error: 'Error fetching inspirations' });
    }
});

// define POST for api route '/api/v1/inspirations'
router.post('/inspirations', upload.single('image'), async (req: express.Request, res: express.Response) => {
    // TODO validate authentication and is admin

    // create new inspiration in database from frontend /inspirations/new form
    const { title, content, published, site } = req.body;
    const imageFile = req.file;
    console.log('Recieved inspiration form data:');
    console.log('Fields:', { title, content, published, site });
    console.log('Image File:', imageFile);

    // upload the imageFile to S3 bucket and get the url of the image
    try {
	const imageBuffer = imageFile.buffer;
	const fileType = imageFile.mimetype.split('/')[1];

	const imageUrl = await uploadImageToS3(imageBuffer, fileType);

	await prisma.inspiration.create({
	    data: {
		name: title,
		content: content,
		site: site,
		published: published === 'true',
		imageUrl: imageUrl,
	    },
	});
	res.sendStatus(201);
    } catch (err) {
	console.error('error:', err);
	res.sendStatus(500);
    }
});

export default router;
