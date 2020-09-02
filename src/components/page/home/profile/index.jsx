import React, { Fragment } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { CustomChip } from "../../../global/chips";

const styles = makeStyles((theme) => {
	return {
		imageProfile: {
			width: "90px",
			height: "90px",
			borderRadius: "60px",
			border: "2px solid #354f6b",
		},
		occupationProfile: {
			fontSize: "16px",
			lineHeight: "1",
			marginBottom: "12px",
		},
		descriptionProfile: {
			maxWidth: "300px",
			margin: "auto",
		},
	};
});

const HomeProfile = () => {
	const classes = styles();

	return (
		<Fragment>
			{/* HOME */}
			<Box marginTop="36px" textAlign="center" marginBottom="4px">
				<img className={classes.imageProfile} src="/img-home/ava-satrio.webp" />
			</Box>
			{/* ABOUT */}
			<Box textAlign="center">
				<Typography variant="h6" component="h1">
					Satrio Adi
				</Typography>
				<Typography color="textSecondary" className={classes.occupationProfile}>
					Full Stack Developer
				</Typography>
				<Box marginBottom="8px">
					<Typography className={classes.descriptionProfile}>
						A professional who love his works and likes to give solutions with
						technology.
					</Typography>
				</Box>
				<Box marginBottom="24px">
					<CustomChip
						icon={<RoomIcon />}
						label="Surabaya, Indonesia"
						variant="outlined"
						color="secondary"
						link="https://www.google.com/search?q=surabaya+indonesia&rlz=1C1CHBF_enID832ID832&oq=surabaya+indonesia&aqs=chrome..69i64.11911j0j1&sourceid=chrome&ie=UTF-8"
					/>
				</Box>
			</Box>
			{/* ABOUT END */}
			{/* HOME END */}
		</Fragment>
	);
};

export default HomeProfile;
