'use client';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
    title: string;
    content: string;
    site: string;
    image: FileList;
    published: boolean;
};

export default function NewInspiration() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
	const formData = new FormData();
	formData.append('title', data.title);
	formData.append('content', data.content);
	formData.append('site', data.site);
	formData.append('image', data.image[0]);
	formData.append('published', String(data.published));

	const response = await fetch('/api/v1/inspirations', {
	    method: 'POST',
	    body: formData,
	});

	if (response.ok) {
	    console.log('Inspiration submitted successfully!');
	    navigate('/inspirations'); // redirect to inspirations home page
	} else {
	    console.error('Error submitting inspiration!');
	}
    };
    
    return (
	<div className="content">
	    <h2 className="text title">Create a New Inspiration</h2>
	    <form className="form" onSubmit={handleSubmit(onSubmit)}>
		<label htmlFor="title" className={errors.title ? 'error' : 'text'}>{errors.title ? errors.title.message : 'Title'}</label>
		<input  id="title" {...register('title', { required: 'Title is required' })} />
		<label htmlFor="content" className={errors.content ? 'error' : 'text'}>{errors.content ? errors.content.message : 'Content'}</label>
		<textarea id="content" {...register('content', { required: 'Content is required' })} />
		<label htmlFor="site" className={errors.site ? 'error' : 'text'}>{errors.site ? errors.site.message : 'Site'}</label>
		<input id="site" {...register('site', { required: 'Site is required' })} />
		<label htmlFor="image" className={errors.image ? 'error' : 'text'}>{errors.image ? errors.image.message : 'Image'}</label>
		<input id="image" className="text" type="file" accept=".jpg,.png,.PNG,.JPG,.webp,.WEBP" {...register('image', { required: 'Image is required' })} />
		<div className="form-row">
		    <label className="text">Publish</label>
		    <input type="checkbox" id="published" {...register('published')}/>
		</div>
		<br />
		<button type="submit">Create</button>
	    </form>
	</div>
    );
}
