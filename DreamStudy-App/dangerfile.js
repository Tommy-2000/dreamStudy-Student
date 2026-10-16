import path from 'path';
import { dangerReassure } from 'reassure';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dangerReassure({
  inputFilePath: path.join(__dirname, './.reassure/output.md')
});
