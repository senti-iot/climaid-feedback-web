import React from 'react';
import { Typography } from '@material-ui/core';

import mainStyles from 'styles/mainStyles';

const FeedbackButton = props => {
	const classes = mainStyles();
	const type = props.type;
	const label = props.label;
	const feedback = props.feedback;

	return (
		<div id={type.id} className={classes.feedbackButtonWrapper} onClick={(event) => props.onClick(event)}>
			<div className={classes.feedbackButton + ' ' + (feedback.indexOf(type) !== -1 ? classes.feedbackButtonSelected : '')}>
				<img src={require(`assets/buttons/${type}.svg`)} alt={label} />
			</div>
			<Typography className={classes.feedbackButtonLabel}>{label}</Typography>
		</div>
	)
}

export default FeedbackButton;