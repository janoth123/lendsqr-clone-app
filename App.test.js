// import { render, screen } from "@testing-library/react";
// import App from './App';
import UserDetails from "./src/components/pages/UserDetails";

// test('renders learn react link', () => {
//   // render(<App />)
//   render(<  Component/>)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })


test('user length is 100', async () => {
  await expect(UserDetails()).resolves.toBe(100);
});

test('the fetch fails with an error', async () => {
  await expect(fetchData()).rejects.toMatch('error');
});