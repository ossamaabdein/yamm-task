import axios from "axios"

export const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  baseURL: "http://localhost:3030",
  headers: {
    Accept: "application/json",
  },
})

export const generalGetRequest = async (
  route: string,
  params?: Record<string, string | number>,
) => {

  try {
    const response: any = await axiosInstance.get(route, {params})
    
    if (response?.data) {
      return response?.data
    }
  } catch (error : any) {
    if (error.response?.status) {
      const status = error.response.status
    }

    throw {
      data: error.response?.data,
      message: error.message,
    }
  }
}

export const generalPostRequest = async (props: {
  route: string
  values: object
  onSuccess?: (res: any) => void
  onError?: (err?: any) => void
  onFinish?: () => void
}) => {

  const {
    route,
    values,
    onSuccess,
    onError,
    onFinish,
  } = props
  const response = await axiosInstance
    .post(route, values)
    .then((res) => {
      if (onSuccess && (res.status == 201 || res?.status == 200)) onSuccess(res)
      else if (onError) onError(res)
      return res.data
    })
    .catch((error) => {
      const status = error?.response?.status
      console.log(status, "errstatus")
      if (onError) onError(error)
      return error?.response?.data
    })
    .finally(() => {
      if (onFinish) onFinish()
    })
  return response
}

export const generalPutRequest = async (props: {
  route: string
  values?: object
  auth?: boolean
  onSuccess?: (res: any) => void
  onError?: (err?: any) => void
  onFinish?: () => void
}) => {
  const { route, values, onSuccess, onError, onFinish } = props
  const response = await axiosInstance
    .put(route, values, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res)
      if (onSuccess && (res.status == 201 || res?.status == 200)) onSuccess(res)
      else if (onError) onError(res)
      return res.data
    })
    .catch((error) => {
      if (onError) onError(error)
      return error?.response?.data
    })
    .finally(() => {
      if (onFinish) onFinish()
    })
  return response
}