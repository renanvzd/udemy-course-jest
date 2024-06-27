import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";


function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' }
  ]
  render(<UserList users={users} />);

  return {
    users
  };
}

// Em vez do renderComponent() em cada teste, poderia ser utilizado o beforeEach antes de todos os testes.
// beforeEach(() => {
//   render(<UserList users={users} />);
// })

test("render one row per user", () => {
  // Render the component
  renderComponent();
  // Find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);

});

/*
test("render one row per user", () => {
  // Render the component
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' }
  ]
  const { container } = render(<UserList users={users} />);

  // Find all the rows in the table
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr')

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);

});
 */

test("render the email and name of each user", () => {
  // Render the component
  const { users } = renderComponent()

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }

});