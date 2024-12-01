import { httpClient } from "@/components/api";
import { userAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
type FormFields = {
    title: string;
    description: string;
    tags: tag[];
  };
  type tag = {
    name: string;
  }
// export const sendQuestion = async (data: FormFields) => {
//     // return Promise.resolve(data);
    
//     console.log("data", data)
//     const response = await httpClient.post("/questions", data)
//     return response.data
//   };
export const sendQuestion = async (data: FormFields) => {
    const user = useAtomValue(userAtom);
    const token = user?.accessToken;
  
    if (!token) {
      throw new Error("No access token available");
    }
  
    console.log("Sending data:", data);
    
    const response = await httpClient.post(
      "/questions", 
      data, 
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add Authorization header with the token
        }
      }
    );
    return response.data;
  };