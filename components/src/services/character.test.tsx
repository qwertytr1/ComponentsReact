import characterService from './CharacterService';
import httpService from './httpService'; // Assuming that httpService is another module being used in characterService
import { act } from '@testing-library/react';

jest.mock('./httpService', () => ({
  get: jest.fn(),
}));

describe('characterService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call httpService.get with correct endpoint and query parameters', async () => {
    const inputValue = 'example';
    const expectedEndpoint = 'character/';
    const expectedQueryParams = `?name=${inputValue}`;
    const responseData = { data: { results: ['character1', 'character2'] } };

    let result;
    await act(async () => {
      result = await characterService.get(inputValue);
    });

    expect(httpService.get).toHaveBeenCalledTimes(1);
    expect(httpService.get).toHaveBeenCalledWith(`${expectedEndpoint}${expectedQueryParams}`);
    expect(result).toEqual(responseData.data.results);
  });

  it('should call httpService.get with default query parameters when inputValue is not provided', async () => {
    const expectedEndpoint = 'character/';
    const expectedQueryParams = '';
    const responseData = { data: { results: ['character1', 'character2'] } };

    let result;
    await act(async () => {
      result = await characterService.get();
    });

    expect(httpService.get).toHaveBeenCalledTimes(1);
    expect(httpService.get).toHaveBeenCalledWith(`${expectedEndpoint}${expectedQueryParams}`);
    expect(result).toEqual(responseData.data.results);
  });

  it('should handle error when httpService.get returns an error', async () => {
    const inputValue = 'example';
    const expectedEndpoint = 'character/';
    const expectedQueryParams = `?name=${inputValue}`;
    const errorMessage = 'Error occurred';

    await expect(characterService.get(inputValue)).rejects.toThrowError(errorMessage);
    expect(httpService.get).toHaveBeenCalledTimes(1);
    expect(httpService.get).toHaveBeenCalledWith(`${expectedEndpoint}${expectedQueryParams}`);
  });
});
