import React from "react";

const currentYear = new Date().getFullYear()

export default function Footer() {
    return (
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer>
    )
}