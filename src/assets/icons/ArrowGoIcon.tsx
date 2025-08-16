import { Path, Svg } from "react-native-svg";

export const ArrowGoIcon = ({ size = 12, color = "#fff" }) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
			<Path
				d="M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z"
				fill={color}
			/>
		</Svg>
	);
};
