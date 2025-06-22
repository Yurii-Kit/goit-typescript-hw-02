import axios from "axios";
import type { Photo } from "./types/photo";

axios.defaults.baseURL = `https://api.unsplash.com`;

// Загальний тип-фетчер
async function fetchData<T>(url: string, config = {}): Promise<T> {
  const response = await axios.get<T>(url, config);
  return response.data;
}

// Тип для відповіді API
interface ApiResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}
export const fetchPhotos = async (
  input: string,
  currentPage: number
): Promise<Photo[]> => {
  const AccessKey = "QqOptRXwPPZpniHhBq9tkY5UVVyQ3wiSGt6RQauxpdw";
  try {
    const data = await fetchData<ApiResponse>("/search/photos", {
      params: {
        query: input,
        page: currentPage,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${AccessKey}`,
        "Accept-Version": "v1",
      },
    });
    return data.results;
  } catch (error) {
    console.error("Помилка завантаження фото:", error);
    return [];
  }
};

// без дженериків
// type UnsplashPhoto = {
//   id: string;
//   alt_description: string;
//   urls: {
//     small: string;
//     full: string;
//   };
// };

// type UnsplashResponse = {
//   results: UnsplashPhoto[];
//   total: number;
//   total_pages: number;
// };

// export const fetchPhotos = async (
//   input: string,
//   currentPage: number
// ): Promise<UnsplashPhoto[]> => {
//   const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
// VITE_UNSPLASH_ACCESS_KEY = твій_ключ_тут;

//   try {
//     const response = await axios.get("/search/photos", {
//       params: {
//         query: input,
//         page: currentPage,
//         per_page: 12,
//       },
//       headers: {
//         Authorization: `Client-ID ${accessKey}`,
//         "Accept-Version": "v1",
//       },
//     });

//     const data: UnsplashResponse = response.data;
//     return data.results;
//   } catch (error) {
//     console.error("Помилка при завантаженні фото:", error);
//     return [];
//   }
// };
