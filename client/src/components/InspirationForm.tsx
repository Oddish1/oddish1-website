'use client';

import { useState } from 'react';

export default function InspirationForm() {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    site: '',
    published: false,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      setMessage('Please select an image.');
      return;
    }

    const form = new FormData();
    form.append('name', formData.name);
    form.append('content', formData.content);
    form.append('site', formData.site);
    form.append('published', formData.published.toString());
    form.append('image', imageFile);

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/v1/inspirations', {
        method: 'POST',
        body: form,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Inspiration created!');
        setFormData({ name: '', content: '', site: '', published: false });
        setImageFile(null);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      setMessage('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
      <input type="text" name="site" placeholder="Site" value={formData.site} onChange={handleChange} />
      <label>
        <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} />
        Published
      </label>
      <input type="file" accept="image/*" onChange={handleFileChange} required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Create Inspiration'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

