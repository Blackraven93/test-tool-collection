import { displayUser, fetchCurrentUser } from '../build/fetch.js';
import { JSDOM } from 'jsdom';

jest.mock('../build/fetch.js');

test('dom handle', () => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div>
          <span id="username"></span>
          <button type="button" id="button">
        </div>
      </body>
    </html>

  `);

  fetchCurrentUser.mockImplementation((cb) => {
    cb({
      fullName: 'Black swallow',
      loggedIn: true,
    });
  });
  dom.window.document.querySelector('#button').click();

  // fetchCurrentUser가 불려지지 않음..
  expect(fetchCurrentUser).toBeCalled();
  expect(dom.window.document.querySelector('#username').textContent).toBe(
    'Black swallow - Logged In'
  );
});
