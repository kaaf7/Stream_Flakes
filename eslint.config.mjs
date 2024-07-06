import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import reactRefresh from "eslint-plugin-react-refresh"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: ["**/dist", "**/.eslintrc.cjs"]
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:@typescript-eslint/recommended",
      "eslint-config-prettier"
    )
  ),
  {
    plugins: {
      "react-refresh": reactRefresh
    },

    languageOptions: {
      parser: tsParser
    },

    settings: {
      react: {
        version: "detect"
      },

      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "off",
      "import/named": "warn",
      "no-undef": "off",
      "import/namespace": "warn",
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true
        }
      ]
    }
  }
]
