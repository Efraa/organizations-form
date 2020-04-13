// import { API } from './api'

export const organizationsApi = {
  // sendForm: data => API.post('formEndpoint', data),
  sendForm: data =>
    new Promise((resolve, reject) =>
      setTimeout(
        () => resolve({ msg: 'Backend response received', data }),
        1500
      )
    ),
}
