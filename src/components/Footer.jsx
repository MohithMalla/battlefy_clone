export default function Footer(){
  return (
    <footer className="section py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
        <div>© 2025 Flair Clone. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
