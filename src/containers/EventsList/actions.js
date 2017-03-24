import axios from 'axios';
import api from "../../api/index";

export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
  return {
    type: FETCH_EVENTS,
    payload: {
      name: 'Doron'
    }
  };
}
