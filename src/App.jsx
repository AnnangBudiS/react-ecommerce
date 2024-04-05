import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import ProductPage from "./_root/pages/product-page";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/form/SigninForm";
import { CartPage, DetailPages, ErrorPage } from "./_root/pages";
// import Test from "./_root/pages/test/Test";
import SignupForm from "./_auth/form/SignupForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<ProductPage />} />
          <Route path="/products/:id/detail" element={<DetailPages />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<SigninForm />} />
          <Route path="/register" element={<SignupForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
