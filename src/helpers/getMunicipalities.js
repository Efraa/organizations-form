import { municipalities } from '../data'

export const getMunicipalities = provinceId =>
  municipalities.filter(municipality => municipality.provinceId === provinceId)
