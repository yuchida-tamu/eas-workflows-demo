import useSWR from "swr";

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

export const useDestinations = () => {
	const { data, error, isLoading } = useSWR(
		"https://cdfvxxcscwbuproxmigr.supabase.co/functions/v1/demo-travel-location-list",
		fetcher,
	);
	const destinations = data ?? [];

	return {
		destinations: destinations as TravelLocation[],
		error,
		isLoading,
	};
};
