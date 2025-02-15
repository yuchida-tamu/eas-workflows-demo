import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../../../components/ThemedText";
import { useDestinations } from "../../../hooks/useDestinations";

export default function DestinationScreen() {
	const { destinations } = useDestinations();
	const router = useRouter();
	const handlePressBook = useCallback(() => {
		router.dismissTo("/(tabs)/destinations");
	}, [router]);

	return (
		<>
			{destinations && (
				<View style={{ flex: 1 }}>
					<Image
						source={{ uri: destinations[0].image_url }}
						style={{ width: "100%", height: 200 }}
					/>
					<View style={{ padding: 16, gap: 8 }}>
						<ThemedText type="title">{destinations[0].name}</ThemedText>

						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<ThemedText style={{ flex: 1 }}>
								{destinations[0].description}
							</ThemedText>
							<Ionicons name="star" size={16} color="orange" />
							<ThemedText>{destinations[0].rating}</ThemedText>
						</View>
					</View>
				</View>
			)}

			<Pressable
				style={({ pressed }) => [
					{
						padding: 16,
						backgroundColor: "lightblue",
						borderRadius: 8,
					},
					pressed && { backgroundColor: "lightcoral" },
				]}
				onPress={handlePressBook}
			>
				<ThemedText style={{ color: "#0a7ea4" }}>Book the place</ThemedText>
			</Pressable>
		</>
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
