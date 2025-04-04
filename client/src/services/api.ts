import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export interface CustomCalculationParams {
  element: string;
  feedstock_type: string;
  soil_conc: number;
  soil_conc_sd: number;
  soil_d: number;
  soil_d_err: number;
  dbd: number;
  dbd_err: number;
  feed_conc: number;
  feed_conc_sd: number;
  application_rate: number;
}

export interface PresetCalculationParams {
  element: string;
  feedstock_type: string;
}

export interface CalculationResult {
  distributions: {
    feedstock: {
      x: number[];
      y: number[];
    };
    soil: {
      x: number[];
      y: number[];
    };
  };
  concentrations: {
    [key: string]: {
      x: number[];
      y: number[];
    };
  };
  element: string;
  feedstock_type: string;
}

interface ElementsResponse {
  elements: string[];
}

export async function getElements(feedstockType: string): Promise<string[]> {
  const response = await axios.get<ElementsResponse>(
    `${API_BASE_URL}/elements?feedstock_type=${feedstockType}`
  );
  return response.data.elements;
}

export async function calculateCustomConcentrations(
  params: CustomCalculationParams
): Promise<CalculationResult> {
  const response = await axios.post<CalculationResult>(
    `${API_BASE_URL}/calculate-custom`,
    params
  );
  return response.data;
}

export async function calculatePresetConcentrations(
  params: PresetCalculationParams
): Promise<CalculationResult> {
  const response = await axios.post<CalculationResult>(
    `${API_BASE_URL}/calculate-preset`,
    params
  );
  return response.data;
}
