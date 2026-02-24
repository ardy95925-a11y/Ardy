const wikiData = {
    home: {
        title: "Tower Front",
        subtitle: "Global Defense Intelligence",
        content: `
            <div class="notice-box"><strong>SYSTEM STATUS:</strong> Operational. Version 2.26 [Pre-Release]</div>
            <p><strong>Tower Front</strong> is a tactical tower defense experience set against the backdrop of a global temporal crisis. What began as a project by lead developer <strong>Nick</strong> has evolved into a high-fidelity production featuring advanced game systems and a dedicated community.</p>
            <div class="card-grid">
                <div class="mini-card" onclick="loadPage('mechanics')"><h3>⚙️ Mechanics</h3><p>Contract Points & Strategy</p></div>
                <div class="mini-card" onclick="loadPage('lore')"><h3>⏳ Lore</h3><p>Year 2033 & Time Travel</p></div>
                <div class="mini-card" onclick="loadPage('team')"><h3>👥 Personnel</h3><p>The Dev Team & Roles</p></div>
            </div>
        `
    },
    history: {
        title: "Project History",
        subtitle: "From Inception to 2026",
        content: `
            <h2>The Beginning</h2>
            <p>The project launched approximately a year ago. Early management was handled by Nick and a nascent team. As with many ambitious projects, the road was rocky—the team faced internal management errors, community raids, and external hostility.</p>
            <h2>Growth</h2>
            <p>By the end of 2025, the project transformed. The community reached <strong>750+ members</strong>. The dev team was professionalized, shifting focus to high-quality assets, better music, and polished animations.</p>
        `
    },
    mechanics: {
        title: "Game Mechanics",
        subtitle: "Tactical Systems",
        content: `
            <aside class="infobox">
                <div class="infobox-title">System Specs</div>
                <table>
                    <tr><td>Tech Level</td><td>Professional</td></tr>
                    <tr><td>P2W Status</td><td>Zero / Fair Play</td></tr>
                    <tr><td>Currency</td><td>Contract Points</td></tr>
                </table>
            </aside>
            <h2>Contract Points (CP)</h2>
            <p>One of the core progression systems is <strong>Contract Points</strong>. Players earn these through active gameplay. Unlike traditional shops, you "invest" points into specific tower contracts. Once a contract is fully funded, the tower is yours forever.</p>
            <h2>Advanced Tech</h2>
            <p>Tower Front utilizes professional game systems and advanced techs to ensure smooth performance even during high-density enemy waves.</p>
        `
    },
    lore: {
        title: "Lore & Universe",
        subtitle: "Temporal Files",
        content: `
            <p>The year is <strong>2033</strong>. The discovery of <strong>Chaos Fragments</strong> has shattered our understanding of linear time.</p>
            <h2>Antarctica Base</h2>
            <p>The main operations lobby is situated in a secret underground facility in Antarctica. From here, the team coordinates defenses against encroaching threats across various timelines.</p>
        `
    },
    security: {
        title: "Security Archive",
        subtitle: "Personnel Incidents",
        content: `
            <div class="danger-box"><strong>WARNING:</strong> Unauthorized individuals listed below are blacklisted from all project assets.</div>
            <h2>The Neathean Incident</h2>
            <p>A former contributor known as <strong>Neathean</strong> was removed from the project following severe breaches, including:</p>
            <ul>
                <li>Theft of Discord and Roblox accounts.</li>
                <li>Fabrication of legal documents.</li>
                <li>Attempting to sell game assets without authorization.</li>
            </ul>
            <p>Following his ban, he attempted to damage the project's reputation. The team has since implemented "Advanced Tech" security protocols to protect all assets.</p>
        `
    },
    ardy: {
        title: "Personnel: Ardy",
        subtitle: "Development Lead",
        content: `
            <aside class="infobox">
                <div class="infobox-title">Personnel File</div>
                <table>
                    <tr><td>Role</td><td>Lead UI Designer</td></tr>
                    <tr><td>Secondary</td><td>Voice / Building</td></tr>
                    <tr><td>Status</td><td>Active</td></tr>
                </table>
            </aside>
            <p><strong>Ardy</strong> joined Tower Front after reaching out to Nick. Originally intending to assist temporarily, Ardy saw the game's massive potential and became a permanent, core member of the team.</p>
            <h2>Contributions</h2>
            <ul>
                <li><strong>Main UI Designer:</strong> Responsible for the tactical visual interface.</li>
                <li><strong>Narrator:</strong> Voicing the game's guidance systems.</li>
                <li><strong>Asset Building:</strong> Constructed various key game environments.</li>
            </ul>
        `
    },
    team: {
        title: "The Dev Team",
        subtitle: "Project Personnel",
        content: `
            <p>Tower Front is built by a diverse team of specialists dedicated to high-quality game design.</p>
            <div class="staff-grid">
                <div class="staff-card"><h4>Design</h4><p>UI, Concept Art, Drawing</p></div>
                <div class="staff-card"><h4>Engineering</h4><p>Scripters, VFX, Tech Systems</p></div>
                <div class="staff-card"><h4>Creative</h4><p>Music, Voice Acting, Modeling</p></div>
                <div class="staff-card"><h4>World</h4><p>Builders, Map Designers</p></div>
            </div>
        `
    }
};
