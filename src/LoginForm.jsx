export default function LoginForm() {
  return (
    <form>
      <h2>Sign In</h2>
      <div className="field">
        <input type="text" name="username" required />
        <label>Username</label>
      </div>
      <div className="field">
        <input type="password" name="password" required />
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Sign In
      </a>
    </form>
  );
}
