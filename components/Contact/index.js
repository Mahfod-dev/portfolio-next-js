import React, { useState } from 'react';
import axios from 'axios';
import {
	Input,
	useInput,
	Grid,
	Text,
	Textarea,
	Button,
	Spacer,
} from '@nextui-org/react';
import { SendButton } from '../UI/Button/SendButton';
import { SendIcon } from '../UI/Button/SendIcon';
import { toast } from 'react-toastify';

const initialState = {
	name: '',
	email: '',
	message: '',
	textarea: '',
};

const Contact = () => {
	const [formData, setFormData] = useState(initialState);

	const { value, reset, bindings } = useInput('');
	console.log(value);
	const validateEmail = (value) => {
		return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
	};

	const helper = React.useMemo(() => {
		if (!value)
			return {
				text: '',
				color: 'primary',
			};
		const isValid = validateEmail(value);
		return {
			text: isValid ? 'Correct email' : 'Enter a valid email',
			color: isValid ? 'success' : 'error',
		};
	}, [value]);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post('/api/contact', formData);

			if (data) {
				toast.success('Email was sent');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Spacer />
			<form onSubmit={handleSubmit} id='contact'>
				<Grid.Container gap={4} justify='center' alignContent='center'>
					<Grid css={{ placeItems: 'center' }}>
						<Text h4 css={{ textAlign: 'center' }}>
							You need achieve your dreams,
							<br />
							Please contact me and let me discuss...
						</Text>
						<Grid xs={12} alignItems='center' justify='center'>
							<Input
								onChange={handleChange}
								css={{ textAlign: 'center' }}
								status='primary'
								clearable
								label='Name'
								name='name'
								placeholder='Enter your name'
								width='300px'
								height='300px'
								value={formData.name}
							/>
						</Grid>
						<Grid xs={12} justify='center' alignItems='center'>
							<Input
								css={{ textAlign: 'center' }}
								{...bindings}
								clearable
								shadow={false}
								onClearClick={reset}
								status={helper.color}
								color={helper.color}
								helperColor={helper.color}
								helperText={helper.text}
								type='email'
								label='Email'
								name='email'
								placeholder='Enter your email'
								width='300px'
								height='300px'
								onChange={handleChange}
								value={formData.email}
							/>
						</Grid>

						<Grid justify='center' alignContent='center'>
							<Input
								{...bindings}
								css={{ textAlign: 'center' }}
								width='300px'
								height='300px'
								status='primary'
								clearable
								name='message'
								contentRightStyling={false}
								label='Message'
								onChange={handleChange}
								value={formData.message}
								placeholder='Type your message...'
								contentRight={
									<SendButton>
										<SendIcon />
									</SendButton>
								}
							/>
						</Grid>
						<Grid justify='center' alignContent='center'>
							<Textarea
								css={{ textAlign: 'center' }}
								color='primary'
								status='primary'
								helperText='Enter a larger description'
								label='More Description'
								placeholder='Description'
								width='300px'
								height='600px'
								onChange={handleChange}
								name='textarea'
								value={formData.textarea}
							/>
							<Grid>
								<Spacer />
								<Button
									type='submit'
									css={{ textAlign: 'center', width: '100%' }}
									auto
									color='secondary'
									size='sm'>
									Send Value
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid.Container>
			</form>
		</>
	);
};

export default Contact;
