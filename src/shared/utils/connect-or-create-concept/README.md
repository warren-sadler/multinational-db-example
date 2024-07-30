# Connect Or Create Concept
This function describes a helpful utilitiy for connecting or creating a concept via Prisma `connectOrCreate`.

## What is a concept?
A concept is any database entity that could be uniquely identified by its `name` field. 

For example, a `Country` entity could be uniquely identified by its `name` field.

## Detailed Example
Here is an example of a `Country` entity:

```prisma
model Country {
  id       String    @id @default(cuid())
  name     String    @unique // This field is used to uniquely identify the country
  Accounts Account[]

  @@map("countries")
}
```

Here is an example of an `Account` entity:

```prisma
model Account {
  id        String   @id @default(cuid())
  name      String   @unique
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  countryId String  @map("country_id")
  Country   Country @relation(fields: [countryId], references: [id])

  @@map("accounts")
}
```

## How to use
Now let's say we have a `Country` entity and we want to connect or create a country with the name `USA` while creating an `Account` entity.

Here is how you can use the `connectOrCreate` function:

```typescript
import { connectOrCreateConcept } from 'src/shared/utils/connect-or-create-concept';

prisma.account.create({
  data: {
    name: 'John Doe',
    Country: connectOrCreateConcept('USA')
  }
});
```

The `connectOrCreate` function will first try to find a country with the name `USA`. If it finds one, it will connect the account to that country. If it doesn't find one, it will create a new country with the name `USA` and connect the account to that country.
