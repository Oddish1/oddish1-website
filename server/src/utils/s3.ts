import { S3Client } from '@aws-sdk/client-s3';

export const s3 = new S3Client({
    region: 'us-sea-1',
    endpoint: `https://${process.env.S3_ENDPOINT}`,
    credentials: {
	accessKeyId: process.env.S3_ACCESS_KEY!,
	secretAccessKey: process.env.S3_SECRET_KEY!,
    },
});

