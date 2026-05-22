let prisma: any;

try {
  // Use require at runtime so TypeScript won't error if the generated client is missing
  // (common in template / CI environments before `prisma generate`).
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { PrismaClient } = require("@prisma/client");

  const globalForPrisma = globalThis as typeof globalThis & {
    prisma?: any;
  };

  prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ["query", "error"] });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }
} catch (e) {
  // If the Prisma client isn't generated or installed, provide a harmless stub so
  // the app can still build (useful for demos and initial scaffolding).
  // Developers should run `npx prisma generate` and ensure DATABASE_URL is
  // configured for full Prisma functionality.
  // eslint-disable-next-line no-console
  console.warn("@prisma/client not available; using stub prisma client.", (e as any)?.message || e);
  prisma = {};
}

export { prisma };
