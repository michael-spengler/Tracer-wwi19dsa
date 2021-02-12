FROM hayd/alpine-deno:latest

EXPOSE 3000

WORKDIR /server/

COPY . .

RUN echo "CONTAINER IS BUILD"
CMD [ "run", "--unstable", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "./src/api.ts" ]
