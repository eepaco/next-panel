import React from "react";

export default function Button(
	props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
	return <button {...props} />;
}
