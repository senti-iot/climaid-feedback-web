import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';


const Alert = props => {
	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">Fejl!</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Du skal vælge minimum en ting du oplever.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleClose} color="primary" autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Alert;