import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><span>© 2026 {profile.name}</span><span className="footer-contact"><a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a> · <a href={profile.social.email}>{profile.contact.email}</a></span></div>
        <div className="social-links">
          <a href={profile.social.github}>GitHub</a>
          <a href={profile.social.linkedin}>LinkedIn</a>
          <a href={profile.social.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}
