import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSWR from "swr";
import { ThemedText } from "../../components/ThemedText";
import { ThemedView } from "../../components/ThemedView";
import { ThumbnailCard } from "../../components/ui/ThumbnailCard";

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

export default function HomeScreen() {
	const { top, bottom } = useSafeAreaInsets();
	const { data, error, isLoading } = useSWR(
		"https://cdfvxxcscwbuproxmigr.supabase.co/functions/v1/demo-travel-location-list",
		fetcher,
	);

	return (
		<>
			<ThemedView style={[styles.titleContainer, { paddingTop: top + 16 }]}>
				<ThemedText type="title" style={{ textAlign: "center" }}>
					Find your destination!
				</ThemedText>
			</ThemedView>
			<ScrollView
				style={{
					paddingVertical: bottom,
					paddingHorizontal: 16,
				}}
				contentContainerStyle={{ gap: 8 }}
			>
				{!isLoading &&
					data &&
					data.map((location: TravelLocation) => (
						<ThumbnailCard key={location.id} imageUrl={location.image_url}>
							<ThemedText type="defaultSemiBold">{location.name}</ThemedText>
							<ThemedText>{location.description}</ThemedText>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Ionicons name="star" size={16} color="orange" />
								<ThemedText>{location.rating}</ThemedText>
							</View>
						</ThumbnailCard>
					))}
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
		gap: 8,
	},
});
