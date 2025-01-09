import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../store'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos.favoritos)

  const produtoEstaNosFavoritos = (produtoId: number) => {
    return favoritos.some((favorito) => favorito.id === produtoId)
  }

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
