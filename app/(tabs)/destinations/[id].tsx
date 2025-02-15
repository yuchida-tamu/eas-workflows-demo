import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSWR from "swr";
import { ThemedText } from "../../../components/ThemedText";
type TravelLocation = {
	id: number;
	name: string;
	description: string;
	rating: number;
	image_url: string;
};

const fetcher = (url: string) =>
	fetch(url, {
		method: "POST",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type",
		},
	}).then((res) => res.json());

export default function DestinationScreen() {
	const { top, bottom } = useSafeAreaInsets();
	const { data, error, isLoading } = useSWR(
		"https://cdfvxxcscwbuproxmigr.supabase.co/functions/v1/demo-travel-location-list",
		fetcher,
	);

	return (
		<View
			style={{
				paddingTop: top,
			}}
		>
			<ThemedText type="title" style={styles.title}>
				Your Destination
			</ThemedText>

			{data && (
				<Image
					source={{ uri: data[0].image_url }}
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
