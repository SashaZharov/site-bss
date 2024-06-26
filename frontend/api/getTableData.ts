import { API_URL } from "@/urls";

export const getTableData = async () => {
  try {
    const response = await fetch(`${API_URL}/pricelist/`, {
      next: { revalidate: 1 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
