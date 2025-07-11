import { faker } from "@faker-js/faker"
import type { Course } from "./types"

export function generateFakeCourse(): Course {
  return {
    id: faker.string.uuid(), // ✅ Add a unique ID
    title: faker.company.catchPhrase(),
    instructor: faker.person.fullName(),
    imageUrl: faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
    isFavorite: faker.datatype.boolean(),
    isEnrolled: faker.datatype.boolean(),
    progress: faker.number.int({ min: 0, max: 100 }),
    category: faker.word.noun(), // ✅ Add a fake category
  }
}
