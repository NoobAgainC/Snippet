'use server';

import { apiPath } from '@/app/Auth';
import { revalidatePath, revalidateTag } from 'next/cache';

export default async function saveSnippet(snippet, access) {
  if (!access) {
    const err = Error('Unauthorized');
    err.code = 401;
    throw err;
  }

  let path = '/snippet/add';
  if (snippet._id) path = '/snippet/update';

  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${access}`
  };

  const bodyContent = JSON.stringify(snippet);

  const response = await fetch(apiPath(path), {
    method: 'POST',
    body: bodyContent,
    headers: headersList
  });

  const data = await response.json();

  if (!response.ok) {
    console.log(data);
    const err = Error(data.error);
    err.code = response.status;
    throw err;
  }

  revalidatePath(`/snippet/${snippet._id || data.id}`);
  return data;
}
