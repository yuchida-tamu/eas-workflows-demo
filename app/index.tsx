import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";

export default function HomeScreen() {
	return (
		<ThemedView style={styles.container}>
			<ThemedText type="title">Welcome!!</ThemedText>
			<Link href="/(tabs)/destinations" style={styles.link}>
				<ThemedText type="link">Let's Go!!</ThemedText>
			</Link>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});
