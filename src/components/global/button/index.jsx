import { makeStyles, Button, Box } from "@material-ui/core";
import React, { Fragment } from "react";

const styles = makeStyles((theme) => {
	return {
		root: {
			lineHeight: "1.33",
		},
		label: {
			display: "flex",
			alignItems: "center",
		},
		text: {
			marginLeft: "16px",
			marginRight: "auto",
			textAlign: "left",
			fontSize: "16px",
			textTransform: "uppercase",
			letterSpacing: "1px",
			textTransform: "none",
		},
	};
});

const ButtonComponent = (props) => {
	const { text, Icon, link, onClick, ...other } = props;
	const classes = styles();

	return (
		<Button
			classes={{
				label: classes.label,
				root: classes.root,
			}}
			{...other}
			disableElevation
			size="large"
			onClick={onClick}
		>
			{Icon ? <Icon /> : null}
			<span className={classes.text}>
				<span>{text}</span>
			</span>
		</Button>
	);
};

const GlobalButton = (props) => {
	const { link } = props;
	return (
		<Fragment>
			<Box marginBottom="12px">
				{link ? (
					<a href={link} target="_blank" style={{ textDecoration: "none" }}>
						<ButtonComponent {...props} />
					</a>
				) : (
					<ButtonComponent {...props} />
				)}
			</Box>
		</Fragment>
	);
};

export default GlobalButton;
