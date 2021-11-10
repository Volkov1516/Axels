import { getData } from '../api';
import mock from './mock.json';

describe("api", () => {

  it('checks data is awailable', async () => {
    const data = await getData();

    expect(data).toStrictEqual(mock);
  });

});

