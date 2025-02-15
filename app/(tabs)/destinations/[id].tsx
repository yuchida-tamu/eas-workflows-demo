import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../../../components/ThemedText";
import { useDestinations } from "../../../hooks/useDestinations";

export default function DestinationScreen() {
	const { top, bottom } = useSafeAreaInsets();
	const { destinations } = useDestinations();

	return (
		<View
			style={{
				paddingTop: top,
			}}
		>
			<ThemedText type="title" style={styles.title}>
				Your Destination
			</ThemedText>

			{destinations && (
				<Image
					source={{ uri: destinations[0].image_url }}
					style={{ width: "100%", height: 200 }}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		paddingVertical: 16,
	},
});
