
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter,Routes,Route } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import store from '../Store/Productstore';
import Protected from '../Components/UtilityComponents/ProtectingRouting';
const Carts = jest.fn(React.lazy(()=> import("../Components/Carts")));
const AboutUs = jest.fn(React.lazy(()=> import("../Components/AboutUs")));
const Home = jest.fn(React.lazy(()=> import("../Components/Home")));
const Signup = jest.fn(React.lazy(()=> import('../Components/SignUp')));
const Signin = jest.fn(React.lazy(()=> import('../Components/SignIn')));

jest.mock('../Components/AboutUs');
jest.mock('../Components/Home');
jest.mock('../Components/SignUp');
jest.mock('../Components/SignIn');

describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", async() => {
    // Arrange
    Home.mockImplementation(() => <div data-testid="home">HomePage</div>);

    // Act
    render(
      <Provider store={store}>
         <MemoryRouter initialEntries={['/']}>
          <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route exact path='/signup' element={<Signup></Signup>}></Route>
          <Route exact path='/signin' element={<Signin></Signin>}></Route>
          </Routes>
       </MemoryRouter>
      </Provider>  
    );

    // Assert
    screen.debug();
    const node = await screen.findByTestId("home");
    expect(node).toBeInTheDocument();
  });

//   test("Should render page header and carts page for carts route", () => {
//     // Arrange
//     Carts.mockImplementation(() => <div>CartsPage</div>);

//     // Act
//     render(
//       <MemoryRouter initialEntries={['/carts']}>
//         <App/>
//       </MemoryRouter>
//     );

//     // Assert
//     expect(screen.getByText("Shopping Store →")).toBeInTheDocument()
//     expect(screen.getByText("CartsPage")).toBeInTheDocument();
//   });

//   test("Should render page header and AboutUs for about route", () => {
//     // Arrange
//     AboutUs.mockImplementation(() => <div>AboutUsPage</div>);

//     // Act
//     render(
//       <MemoryRouter initialEntries={['/about']}>
//         <App/>
//       </MemoryRouter>
//     );

//     // Assert
//     expect(screen.getByText("Shopping Store →")).toBeInTheDocument()
//     expect(screen.getByText("AboutUsPage")).toBeInTheDocument();
//   });

//   test("Should render page header and Signup for signup route", () => {
//     // Arrange
//     Signup.mockImplementation(() => <div>registrationPage</div>);

//     // Act
//     render(
//       <MemoryRouter initialEntries={['/signup']}>
//         <App/>
//       </MemoryRouter>
//     );

//     // Assert
//     expect(screen.getByText("Shopping Store →")).toBeInTheDocument();
//     expect(screen.getByText("registrationPage")).toBeInTheDocument();
//   });
//   test("Should render page header and Signup for signup route", () => {
//     // Arrange
//     Signin.mockImplementation(() => <div>Login page</div>);

//     // Act
//     render(
//       <MemoryRouter initialEntries={['/signin']}>
//         <App/>
//       </MemoryRouter>
//     );

//     // Assert
//     expect(screen.getByText("Shopping Store →")).toBeInTheDocument();
//     expect(screen.getByText("Login page")).toBeInTheDocument();
//   });
});