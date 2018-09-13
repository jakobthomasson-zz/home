import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

export const get = (
  url: string,
  config: AxiosRequestConfig = {
    onDownloadProgress: (progressEvent: any) => {
      // const percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
      console.log(progressEvent);
      // do whatever you like with the percentage complete
      // maybe dispatch an action that will update a progress bar or something

      // const totalLength = progressEvent.lengthComputable ? progressEvent.total : (progressEvent.).getResponseHeader('content-length');

      const totalLength = progressEvent.lengthComputable ?
        progressEvent.total :
        progressEvent.currentTarget.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');

      console.log('onUploadProgress', totalLength);
      if (totalLength !== null) {
        console.log((progressEvent.loaded * 100) / totalLength);
      }

    },
  }) =>
  axios.get(url, config)
    .then((response: AxiosResponse<any>) => {
      return response;
      // handel response;
    })
    .catch((error: AxiosError) => {
      // handle error
    });
