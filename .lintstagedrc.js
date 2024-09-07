import path from 'path';

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

export default {
	'*.ts': [
		buildEslintCommand,
		"prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx}'",
	],
};
