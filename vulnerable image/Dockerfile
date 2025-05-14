FROM linuxserver/firefox:0.24.04  

USER root  
RUN apt update && apt install -y curl nodejs npm  


COPY admin_panel /opt/admin_panel
WORKDIR /opt/admin_panel

EXPOSE 8080 3000

RUN npm install

CMD ["node", "server.js"] 