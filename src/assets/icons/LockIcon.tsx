import { Path, Svg } from "react-native-svg";

export const LockIcon = ({ size = 24, color = "#3A3A3A" }) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path
				d="M7 10V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V10"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M5 10H19C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};
