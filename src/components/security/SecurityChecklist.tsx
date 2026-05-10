import React from 'react';

const groups = [
  {
    title: 'Server Security',
    items: [
      'Open only ports 22, 80, and 443.',
      'Use SSH keys only; disable password login.',
      'Disable root SSH login and deploy with a normal user.',
      'Enable a firewall such as ufw.',
      'Apply system updates regularly.',
    ],
  },
  {
    title: 'Reverse Proxy Security',
    items: [
      'Route all public traffic through HTTPS.',
      'Keep backend containers off public ports.',
      'Use Caddy or Nginx as the only public entry point.',
      'Set upload size limits before requests reach APIs.',
      'Add basic rate limiting for public API paths.',
    ],
  },
  {
    title: 'Upload API Security',
    items: [
      'Limit PDF upload size for PDF Reader and Aircargo EDI.',
      'Validate extension and MIME type.',
      'Never trust user-supplied filenames.',
      'Use UUID or session-isolated temporary directories.',
      'Clean temporary files after each request.',
      'Use production CORS allowlists, not wildcard origins.',
      'Do not leak internal paths or stack traces in errors.',
      'Do not log sensitive file contents.',
      'Run containers as non-root when practical.',
    ],
  },
  {
    title: 'Secrets',
    items: [
      'Do not commit .env files.',
      'Keep GitHub tokens, API keys, and database passwords out of code.',
      'Provide .env.example for required variables.',
    ],
  },
  {
    title: 'Download Safety',
    items: [
      'Publish installers through GitHub Releases or object storage.',
      'Show version, platform, file size, and sha256 on download pages.',
      'Do not keep exe, zip, or dmg files as long-lived Git assets in Harry.',
    ],
  },
];

const SecurityChecklist: React.FC = () => (
  <div className="security-checklist">
    {groups.map((group) => (
      <section className="content-panel" key={group.title}>
        <h2>{group.title}</h2>
        <ul className="check-list">
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);

export default SecurityChecklist;
