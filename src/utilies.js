import {SMTPClient} from 'smtp-client';
import {main} from './data'

export const client = new SMTPClient({
	//user: 'user',
	//password: 'password',
	host: `smtp.${main.email}`,
	ssl: true,
});