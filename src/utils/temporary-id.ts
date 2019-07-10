function* temporaryIdGenerator(id = 0): IterableIterator<string> {
  yield 'PENDING-' + id;
  yield* temporaryIdGenerator(id + 1);
}

const temporaryIdIterator = temporaryIdGenerator();

export default function temporaryId(): string {
  return temporaryIdIterator.next().value;
}
