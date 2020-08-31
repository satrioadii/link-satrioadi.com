import React, { Fragment, useContext } from "react";
import GlobalButton from "../../../global/button";
import { DialogContextDispatch } from "../../../../providers/dialog";
import { OpenDialogAction } from "../../../../actions/dialog";
import HomeEmailDialog from "../dialog/index.email";

// primary color #2188ff
// secondary color #354f6b

const PersonalSiteIcon = () => {
	return (
		<i
			className="fas fa-passport"
			style={{ color: "#ffffff", fontSize: "28px" }}
		/>
	);
};
const EmailIcon = () => {
	return (
		<i
			className="far fa-envelope"
			style={{ color: "#2188ff", fontSize: "28px" }}
		/>
	);
};
const GithubIcon = () => {
	return (
		<i
			className="fab fa-github"
			style={{ color: "#2188ff", fontSize: "28px" }}
		/>
	);
};
const LinkedinIcon = () => {
	return (
		<i
			className="fab fa-linkedin-in"
			style={{ color: "#2188ff", fontSize: "28px" }}
		/>
	);
};

const HomeLinks = () => {
	const dispatch = { dialog: useContext(DialogContextDispatch) };

	const OpenDialog = (title, component) => {
		OpenDialogAction(dispatch, title, component);
	};

	return (
		<Fragment>
			<GlobalButton
				link="https://satrioadi.com"
				text="Checkout My Personal Website!"
				Icon={PersonalSiteIcon}
				variant="contained"
				color="primary"
				fullWidth
			/>
			<GlobalButton
				link="https://www.linkedin.com/in/satriooadi/"
				text="Linkedin"
				Icon={LinkedinIcon}
				variant="outlined"
				color="primary"
				fullWidth
			/>
			<GlobalButton
				onClick={() => OpenDialog("Let's talk", HomeEmailDialog)}
				text="Email"
				Icon={EmailIcon}
				variant="outlined"
				color="primary"
				fullWidth
			/>
			<GlobalButton
				link="https://github.com/satrioadii"
				text="Github"
				Icon={GithubIcon}
				variant="outlined"
				color="primary"
				fullWidth
			/>
		</Fragment>
	);
};

export default HomeLinks;
