import { SliderItem } from "@/constans";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function getSlider(): Promise<SliderItem[]> {
    try {
        const records = await directus.request(readItems("slider"));
        const sliderItems: SliderItem[] = records.map((item: any) => ({
            id: item.id,
            title: item.title,
            image: item.image,
        }));
        return sliderItems;
    } catch (error) {
        console.error("Error fetching slider items:", error);
        return [];
    }

}
