import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export const numberFormat = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)