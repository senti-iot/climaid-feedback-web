import React from 'react';
import { AppBar, Toolbar, ButtonBase, Typography } from '@material-ui/core';
// import SettingsIcon from '@material-ui/icons/Settings';

import logo from 'assets/logo.png';
import mainStyles from 'styles/mainStyles';

const Header = props => {
	const classes = mainStyles();

	const handleLogoClick = () => {

	}

	// const handleSettingsClick = () => {

	// }

	return (
		<AppBar position="static" elevation={0} className={classes.header}>
			<Toolbar>
				<div className={classes.logoContainer}>
					<ButtonBase
						disableRipple={true}
						onClick={handleLogoClick}
					>
						<img src={`${logo}`} alt="Newsec logo" className={classes.logo} />
					</ButtonBase>
				</div>
				<div className={classes.spacer}></div>
				{/* <ButtonBase
					disableRipple={true}
					onClick={handleSettingsClick}
				>
					<SettingsIcon />
				</ButtonBase> */}
			</Toolbar>
			{props.roomName ? <Typography variant="h2" className={classes.roomName}>{props.roomName}</Typography> : ""}
		</AppBar>
	)
}

export default Header;