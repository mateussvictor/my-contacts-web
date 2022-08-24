
import HttpClient from './utils/HttpClient'

class ContactsService {
  constructor () {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  async listContacts (orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`)
  }

  async createContact (contact) {
    return this.httpClient.post('/contacts', { body: contact })
  }
}

export default new ContactsService()
