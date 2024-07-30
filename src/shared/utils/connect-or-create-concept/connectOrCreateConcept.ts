export function connectOrCreateConcept(name: string) {
  return {
    where: { name },
    create: { name },
  };
}
