import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBoxExample = ({ checked, onChange }) => {
	return (
		<>
			<TextField 
				variant='filled'
				color='secondary'
				type='time'
				label="The Time"
			/>
			<br/>
			<TextField 
				variant='outlined'
				color='primary'
				type='email'
				label='The Email'
				placeholder='Enter your Email'
			/>
			<br />
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						onChange={onChange}
						color="primary"
						inputProps={{
							"aria-label": "secondary checkbox",
						}}
					/>
				}
				label="Testing CheckBox"
			/>
		</>
	);
};

export default CheckBoxExample;
