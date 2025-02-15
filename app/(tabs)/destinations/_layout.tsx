import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="[id]"
				options={{
					headerShown: false,
					presentation: "formSheet",
					sheetGrabberVisible: true,
					contentStyle: {
						flex: 1,
						justifyContent: "space-between",
					},
				}}
			/>
			<Stack.Screen name="+not-found" />
		</Stack>
	);
}
