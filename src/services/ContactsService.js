import delay from '../utils/delay'

class ContactsService {
  async listContacts (orderBy = 'asc') {
    const url = `http://localhost:3001/contacts?orderBy=${orderBy}`
    const response = await fetch(url)

    await delay(500)

    return await response.json()
  }
}

export default new ContactsService()
