import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from './s3.ts';
import { v4 as uuidv4 } from 'uuid';

export async function uploadImageToS3(fileBuffer: Buffer, fileType: string): Promise<string> {
    const bucket = process.env.S3_BUCKET_NAME!;
    const endpoint = process.env.S3_ENDPOINT!;

    if (!bucket || !endpoint) {
	throw new Error('Missing S3_BUCKET_NAME or S3_ENDPOINT in environment variables');
    }

    try {
	const extension = fileType.replace('image/', '');
	const fileName = `${uuidv4()}.${extension}`;

	const uploadParams = new PutObjectCommand({
	    Bucket: bucket,
	    Key: fileName,
	    Body: fileBuffer,
	    ContentType: fileType.startsWith('image/') ? fileType: `image/${extension}`,
	    ACL: 'public-read'
	});

	await s3.send(uploadParams);

	const link = `https://${bucket}.${endpoint}/${fileName}`;
	console.log('Successfully uploaded image to S3:', link);
	return link;
    } catch (err) {
	console.error('error:', err);
    }
}
