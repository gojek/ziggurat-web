import HttpClient from './utils/http-client'

class MemeFetchService {


  memefetch = async () => {
    return new Promise((resolve) => {
      HttpClient.get("https://meme-api.herokuapp.com/gimme/ProgrammerHumor/1")
        .then(responseBody => {
          resolve(responseBody)
        })
        .catch(error => {
          console.error(error)
          resolve([])
        })
    })
  }
}

export default MemeFetchService
