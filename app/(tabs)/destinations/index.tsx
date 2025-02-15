import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import { ThumbnailCard } from "../../../components/ui/ThumbnailCard";
import { useDestinations } from "../../../hooks/useDestinations";

export default function HomeScreen() {
	const { top, bottom } = useSafeAreaInsets();
	const { destinations, error, isLoading } = useDestinations();

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
					destinations.map((location) => (
						<Link
							key={location.id}
							href={{
								pathname: "/(tabs)/destinations/[id]",
								params: { id: location.id },
							}}
							asChild
						>
							<ThumbnailCard imageUrl={location.image_url}>
								<ThemedText type="defaultSemiBold">{location.name}</ThemedText>
								<ThemedText>{location.description}</ThemedText>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Ionicons name="star" size={16} color="orange" />
									<ThemedText>{location.rating}</ThemedText>
								</View>
							</ThumbnailCard>
						</Link>
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
