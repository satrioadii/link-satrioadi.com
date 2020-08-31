import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import GlobalWidthMax from "../../../global/widthmax";

const HomeEmailDialog = () => {
	return (
		<Fragment>
			<Box marginBottom={{ xs: "8px", md: "16px" }}>
				<Typography>
					E-mail me at <strong>satrio@satrioadi.com</strong>
				</Typography>
			</Box>
		</Fragment>
	);
};

export default HomeEmailDialog;
