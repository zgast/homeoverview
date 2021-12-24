FROM node:lts as dependencies
WORKDIR  /homeoverview
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /homeoverview
COPY . .
COPY --from=dependencies /homeoverview/node_modules ./node_modules

FROM node:lts as runner
WORKDIR /homeoverview
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.

COPY --from=builder /homeoverview/ ./


EXPOSE 3000
CMD ["./start.sh"]