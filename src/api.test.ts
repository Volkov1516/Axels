import React from 'react'
import { render } from '@testing-library/react'
import { getData } from './api' 
 
describe("App", () => {

  it('the data is peanut butter', async () => {
    const data = await getData();
    expect(data.users).toStrictEqual([{"id": 1, "login": "User Login", "password": "User Password"}]);
  });

})