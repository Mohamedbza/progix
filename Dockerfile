# syntax=docker/dockerfile:1

# 1) deps
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 2) build
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) run (standalone)
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# optional non-root
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
USER 1001
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
