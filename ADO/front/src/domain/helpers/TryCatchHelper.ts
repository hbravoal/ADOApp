import {TResponse} from '../../domain/TResponse';
// run test for this method in jest

export const TryCatchAsync = async <DataType, ErrorType>(
  promise: Promise<any>,
): Promise<TResponse<DataType, ErrorType>> => {
  let response: TResponse<DataType, ErrorType> = {};
  try {
    const tcData = await promise;
    response.data = tcData;
  } catch (tcError) {
    response.error = tcError as string | undefined;
  }
  return response;
};
