import "./index.css"
import { SnackbarProvider } from "notistack"

import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import AuthProvider from "./components/Auth/AuthProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </AuthProvider>
)
