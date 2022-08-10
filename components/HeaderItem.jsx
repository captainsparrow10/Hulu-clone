import React from "react";

export default function HeaderItem({ title, Icon }) {
	return (
		<div className="div-icon group">
			<Icon className="icon" />
			<p className="title-icon">
				{title}
			</p>
		</div>
	);
}
