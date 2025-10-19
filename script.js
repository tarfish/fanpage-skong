    const nav = performance.getEntriesByType("navigation")[0];
    if (nav?.type === "reload" || (performance.navigation && performance.navigation.type === 1)) {
        location.href = "index.html";
    }