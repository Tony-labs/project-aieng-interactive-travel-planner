export interface Location {
    id: number;
    name: string;
    description: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

export interface Attraction {
    id: number;
    name: string;
    locationId: number;
    type: string; // e.g., "museum", "park", "beach"
    description: string;
    openingHours: string;
}

export interface UserPreferences {
    preferredLocations: number[]; // Array of Location IDs
    favoriteAttractions: number[]; // Array of Attraction IDs
    language: string; // e.g., "en", "es"
}