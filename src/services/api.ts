import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'api/ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
