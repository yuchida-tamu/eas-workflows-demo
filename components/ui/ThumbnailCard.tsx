import { type PropsWithChildren, memo } from "react";
import {
	Image,
	Pressable,
	type StyleProp,
	StyleSheet,
	View,
	type ViewStyle,
} from "react-native";
import { ThemedView } from "../ThemedView";

type Props = {
	imageUrl: string;
	containerStyle?: StyleProp<ViewStyle>;
	onPress?: () => void;
};

export const ThumbnailCard = memo(
	({
		children,
		imageUrl,
		containerStyle,
		onPress,
	}: PropsWithChildren<Props>) => {
		return (
			<Pressable onPress={onPress}>
				<ThemedView style={[styles.container, containerStyle]}>
					<Image source={{ uri: imageUrl }} style={styles.thumbnail} />
					<View style={styles.contentContainer}>{children}</View>
				</ThemedView>
			</Pressable>
		);
	},
);

const styles = StyleSheet.create({
	container: {
		gap: 8,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	thumbnail: {
		width: "100%",
		height: 200,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	contentContainer: {
		padding: 8,
		gap: 4,
	},
});
