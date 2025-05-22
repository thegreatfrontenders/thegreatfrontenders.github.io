// ---------- Read-Only Persistence ---------- //

export function saveReadOnlyData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`Failed to save ${key} to localStorage`, err);
  }
}

export function loadReadOnlyData<T>(key: string): T | null {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (err) {
    console.warn(`Failed to load ${key} from localStorage`, err);
    return null;
  }
}

// ---------- Read/Write Persistence ---------- //

export function saveUserState<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Failed to persist user data for ${key}`, err);
  }
}

export function loadUserState<T>(key: string): T | null {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (err) {
    console.error(`Failed to load user data for ${key}`, err);
    return null;
  }
}

// Optional convenience method to remove key
export function clearLocalStorageKey(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.warn(`Failed to remove key ${key} from localStorage`, err);
  }
}
