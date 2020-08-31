import Container from "@material-ui/core/Container";
import React, { Fragment, useContext } from "react";
import GlobalDialog from "../src/components/global/dialog";
import HomeProfile from "../src/components/page/home/profile";
import { DialogContextDispatch } from "../src/providers/dialog";
import { LandingPageContextDispatch } from "../src/providers/landingpage";
import { SnackbarContextDispatch } from "../src/providers/snackbar";
import { Button } from "@material-ui/core";
import GlobalButton from "../src/components/global/button";
import HomeLinks from "../src/components/page/home/links";

export default function Index(props) {
	const dispatch = {
		landingPage: useContext(LandingPageContextDispatch),
		snackbar: useContext(SnackbarContextDispatch),
		dialog: useContext(DialogContextDispatch),
	};

	return (
		<Fragment>
			<GlobalDialog />
			<Container maxWidth="sm" style={{}}>
				{/* PROFILE */}
				<HomeProfile />
				{/* PROFILE END */}

				{/* BUTTON CONTENT */}
				<HomeLinks />
				{/* BUTTON CONTENT END */}
			</Container>
		</Fragment>
	);
}
