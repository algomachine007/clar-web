/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    return await localStorage.getItem(key);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function load(key: string): any | null {
  try {
    const almostThere = localStorage.getItem(key);

    if (almostThere) {
      return JSON.parse(almostThere);
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function save(key: string, value: any): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export function remove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export function clear(): void {
  try {
    localStorage.clear();
  } catch {}
}
