import { IActor } from "@/types/actor";

function autoUpdateUsername(actor: IActor, newDisplayName: string | null): IActor {
  const oldUsername = convertToUsername(actor.name);

  if (actor.preferredUsername === oldUsername) {
    actor.preferredUsername = convertToUsername(newDisplayName);
  }

  return actor;
}

function convertToUsername(value: string | null): string {
  if (!value) return "";

  // https://stackoverflow.com/a/37511463
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

function validateUsername(actor: IActor): boolean {
  return actor.preferredUsername === convertToUsername(actor.preferredUsername);
}

export { autoUpdateUsername, convertToUsername, validateUsername };