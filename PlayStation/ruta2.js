document.addEventListener("DOMContentLoaded", function () {
    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://ander13ab.github.io"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "InfoPlayStation",
                "item": "https://ander13ab.github.io/PlayStation"
            }
        ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLD);
    document.head.appendChild(script);
});
