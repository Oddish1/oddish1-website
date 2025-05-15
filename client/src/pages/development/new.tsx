'use client';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
    title: string;
    content: string;
    link: string;
    image: FileList;
    progress: number;
    published: boolean;
};

export default function NewProject() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
	const formData = new FormData();
	formData.append('title', data.title);
	formData.append('content', data.content);
	formData.append('link', data.link);
	formData.append('image', data.image[0]);
	formData.append('published', String(data.published));
	formData.append('progress', String(data.progress));

	const response = await fetch('/api/v1/development', {
	    method: 'POST',
	    body: formData,
	});

	if (response.ok) {
	    console.log('Project submitted successfully!');
	    navigate('/development'); // redirect to inspirations home page
	} else {
	    console.error('Error submitting project!');
	}
    };
    
    return (
	<div className="content">
	    <h2 className="text title">Create a New Project</h2>
	    <form className="form" onSubmit={handleSubmit(onSubmit)}>
		<label htmlFor="title" className={errors.title ? 'error' : 'text'}>{errors.title ? errors.title.message : 'Title'}</label>
		<input  id="title" {...register('title', { required: 'Title is required' })} />
		<label htmlFor="content" className={errors.content ? 'error' : 'text'}>{errors.content ? errors.content.message : 'Content'}</label>
		<textarea id="content" {...register('content', { required: 'Content is required' })} />
		<label htmlFor="link" className={errors.link ? 'error' : 'text'}>{errors.link ? errors.link.message : 'Link'}</label>
		<input id="link" {...register('link', { required: 'Link is required' })} />
		<div className="form-row">
		    <label htmlFor="image" className={errors.image ? 'error' : 'text'}>{errors.image ? errors.image.message : 'Image'}</label>
		    <input id="image" className="text" type="file" accept=".jpg,.png,.PNG,.JPG,.webp,.WEBP" {...register('image', { required: 'Image is required' })} />
		</div>
		<div className="form-row">
		    <label htmlFor="progress" className={errors.progress ? 'error' : 'text'}>{errors.progress ? errors.progress.message: 'Progress'}</label>
		    <input id="progress" type="number" {...register('progress', { required: 'Progress is required', min: 0, max: 100 })}/>
		</div>
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
