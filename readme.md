# 0 criando o screen/Signin
# No App.tsx incluir o Signin

# 1 importar uma bibliteca para usar svg como components
[https://github.com/kristerkari/react-native-svg-transformer]
## npm install react-native-svg-transformer
## configurar o arquivo metro.config.js, conforme documentação

# 1
## Criando a pasta @types/svg/index.d.ts
## para lidar com os arquivos importados do tipo svg na pasta assets
# declare module "*.svg" {
##    import React from "react";
##    import { SvgProps } from "react-native-svg";
##    const content: Reac.FC<SvgProps>
##    export default content;
## }
# 2 exportar icones da google e apple e logo do figma e colocar na pasta assets

