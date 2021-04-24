# Gerando um build para o deploy no GitHub Pages:
    ng build --prod --base-href "https://journey-dev-br.github.io/journey-examples/"

# Deployando no GitHub Pages:
    ngh --branch=gh-pages


# URL do site em execução no localhost:
    http://localhost:4200/TipsCssA00001

# URL do site publicado no GitHub Pages:
    https://journey-dev-br.github.io/journey-examples/
    https://journey-dev-br.github.io/journey-examples/TipsCssA00001

# INSTALAÇÃO INICIAL DO GH-PAGES:
# ==============================

# Instalar o gh-pages:
    ng add angular-cli-ghpages

# Alterar no angular.json:
    "outputPath": "dist/journey-examples",
#   para
    "outputPath": "dist",
