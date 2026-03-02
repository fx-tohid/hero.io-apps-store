// Local Storage থেকে array safely read করে
const getStoredApps = () => {
    const storedApps = localStorage.getItem('app-install');
    if (storedApps) {
        // Parse করে empty/nested array remove করে return করি
        return JSON.parse(storedApps).filter(item => typeof item === "number" || typeof item === "string");
    }
    return [];
};

// Local Storage-এ new ID add করি, duplicate avoid করে
const setStoredApps = id => {
    if (Array.isArray(id)) id = id[0]; // safeguard against accidental array
    const storedApps = getStoredApps();
    if (!storedApps.includes(id)) {    // duplicate check
        storedApps.push(id);
        localStorage.setItem('app-install', JSON.stringify(storedApps));
    }
};

// Local Storage থেকে specific ID remove করি
const removeStoredApps = id => {
    const storedApps = getStoredApps();
    const remainApps = storedApps.filter(appsId => appsId !== id);
    localStorage.setItem('app-install', JSON.stringify(remainApps));
};

export { getStoredApps, setStoredApps, removeStoredApps };