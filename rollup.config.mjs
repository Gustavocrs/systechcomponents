import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js", // Ponto de entrada da biblioteca
  output: {
    dir: "dist", // Saída como um diretório (em vez de um único arquivo)
    format: "esm", // Usar o formato ES Modules
    preserveModules: true, // Manter a estrutura de diretórios
  },
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    babel({exclude: "node_modules/**", babelHelpers: "bundled"}),
  ],
  external: ["react", "react-dom", "styled-components", "react-icons", "axios"],
};
