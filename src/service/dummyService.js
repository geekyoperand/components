import http from "./httpService"

class DummyService {
    async getData() {
        try {
            const result = await http.get(`/api/dummydata`)
            return result.data
        } catch (ex) {
            return { apierror: ex.response }
        }
    }
}

export default new DummyService()
