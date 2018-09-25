FROM nginx:1.14-alpine
LABEL maintainer="xqcao<xqcao@xqcao.com>"
LABEL com.docker.compose.container-name="node-mocha-chai-server"

COPY dist /data/www
COPY nginx /etc/nginx
