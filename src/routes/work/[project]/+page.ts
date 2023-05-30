import { error } from '@sveltejs/kit';
import { projects } from '$lib/Blog/library.js';

export const load = ({ params }) => {
	const project = projects.find((work) => {
		const path = work.path.split('/');
		if (path[path.length - 1] === params.project) return work;
	});
	console.log(project);

	if (project) return project;

	throw error(404, 'Not found');
};
