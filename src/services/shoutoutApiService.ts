import axios from "axios";
import Shoutout from "../models/Shoutout";

const baseURL = process.env.REACT_APP_API_URL || "";

export const getAllShoutouts = (): Promise<Shoutout[]> => {
  return axios.get(`${baseURL}/shoutouts`).then((res) => res.data);
};

export const addShoutout = (newSO: Shoutout): Promise<Shoutout> => {
  return axios.post(`${baseURL}/shoutouts`, newSO).then((res) => res.data);
};

export const getShoutoutsByName = (name: string): Promise<Shoutout[]> => {
  return axios.get(`${baseURL}/shoutouts/${name}`).then((res) => res.data);
};

export const deleteOneShoutout = (id: String):Promise<void> => {
  return axios.delete(`${baseURL}/shoutouts/${id}`).then((res) => res.data);
}

export const getMyShoutouts = (name: string): Promise<Shoutout[]> => {
  return axios.get(`${baseURL}/me/${name}`).then(res => res.data);
}
