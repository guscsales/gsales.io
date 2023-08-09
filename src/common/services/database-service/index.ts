import { PrismaClient } from '@prisma/client';
import { ServiceError } from '@/common/services/service-error';
import { StatusCodes } from '@/common/enums/status-codes';

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.POSTGRES_PRISMA_URL } },
});

async function instance<T>(execFunc: (prisma: PrismaClient) => Promise<T>) {
  try {
    const response = execFunc(prisma);
    prisma.$disconnect();

    return response;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error on SQL:', e);

    throw new ServiceError({
      statusCode: StatusCodes.Internal,
    });
  } finally {
    await prisma.$disconnect();
  }
}

const DatabaseService = {
  instance,
};

export default DatabaseService;
