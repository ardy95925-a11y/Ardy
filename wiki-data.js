const wikiData = {
    home: {
        title: "TOWER FRONT // OPS",
        category: "MAIN",
        subtitle: "Global Defense Intelligence Database",
        content: `
            <div class="hud-box">
                <p class="glitch-text" data-text="SYSTEM STATUS: OPERATIONAL">SYSTEM STATUS: OPERATIONAL</p>
                <p>Accessing Year 2033 Secure Servers...</p>
            </div>
            <p><strong>Tower Front</strong> is a tactical defense simulation. What began as a project by <strong>Nick</strong> has evolved into a high-fidelity operation with advanced game systems.</p>
            <div class="grid">
                <div class="stat-card" onclick="loadPage('contracts')">
                    <span class="label">SYSTEM</span>
                    <span class="value">Contracts</span>
                </div>
                <div class="stat-card" onclick="loadPage('lore')">
                    <span class="label">ERA</span>
                    <span class="value">2033 AD</span>
                </div>
                <div class="stat-card" onclick="loadPage('team')">
                    <span class="label">STAFF</span>
                    <span class="value">Active</span>
                </div>
            </div>
            <h2>Latest Intel</h2>
            <ul>
                <li><strong>750+ Members</strong> reached in community hub.</li>
                <li><strong>Gameplay Trailer</strong> released via Nicky's official channel.</li>
                <li><strong>Release Window:</strong> Targeted for March 2026.</li>
            </ul>
        `
    },
    ardy: {
        title: "PERSONNEL: ARDY",
        category: "PERSONNEL",
        subtitle: "Lead UI Designer & Multi-Disciplinary Dev",
        content: `
            <aside class="infobox">
                <div class="infobox-header">CLEARANCE LEVEL 5</div>
                <div class="infobox-img">UI_SPECIALIST</div>
                <table>
                    <tr><td>ROLES</td><td>UI, VA, Build, Art</td></tr>
                    <tr><td>STATUS</td><td>Core Member</td></tr>
                    <tr><td>VOICE</td><td>The Narrator</td></tr>
                </table>
            </aside>
            <p><strong>Ardy</strong> is a cornerstone of the Tower Front development team. Originally joining as a volunteer after messaging Nick, Ardy's vision for the game's interface and community safety transformed the project.</p>
            <h2>Tactical Contributions</h2>
            <ul>
                <li><strong>Interface Design:</strong> Main architect of the professional UI systems.</li>
                <li><strong>Voice Acting:</strong> Official voice of the game's Narrator.</li>
                <li><strong>Asset Engineering:</strong> Built numerous game assets and architectural models.</li>
            </ul>
        `
    },
    security: {
        title: "SECURITY ARCHIVE",
        category: "DATABASE",
        subtitle: "Blacklist & Incident Reports",
        content: `
            <div class="danger-zone">
                <h3>WARNING: MALICIOUS ENTITIES DETECTED</h3>
                <p>The following individuals are permanently banned from the Tower Front network.</p>
            </div>
            <h2>Incident: Neathean</h2>
            <p>Subject was removed following discovery of predatory behavior and asset theft. Neathean attempted to sabotage the game's reputation and sell stolen assets after being blacklisted from Discord and Roblox.</p>
            <div class="hud-box">
                <strong>STATUS:</strong> Blacklisted | <strong>THREAT:</strong> Critical
            </div>
            <p>A second unknown individual was also identified in asset theft operations. Security protocols have since been upgraded to "Advanced Tech" levels.</p>
        `
    },
    contracts: {
        title: "CONTRACT SYSTEMS",
        category: "MECHANICS",
        subtitle: "Non-Linear Progression Technology",
        content: `
            <p>The <strong>Contract Point (CP)</strong> system ensures a fair, non-pay-to-win environment.</p>
            <div class="progress-bar-container">
                <div class="progress-label">Contract Completion Example</div>
                <div class="progress-bar"><div class="progress-fill" style="width: 65%"></div></div>
            </div>
            <p>Players earn points through combat. These points are "invested" into tower contracts. Once a contract is fully funded, the tower is unlocked permanently.</p>
        `
    }
};
