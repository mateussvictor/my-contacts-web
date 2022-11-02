
import HttpClient from './utils/HttpClient'
import CategoryMapper from './mappers/CategoryMapper'

class CategoriesService {
  constructor () {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  async listCategories () {
    const categories = await this.httpClient.get('/categories')

    return categories.map(CategoryMapper.toDomain)
  }
}

export default new CategoriesService()
